import express from 'express';
import Task from '../models/task.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hola, clase continuando con nuestra api desde el archivo de rutas')
});

router.get('/task', async (req, res) => {
  try {
    const task = await Task.find();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/task', async (req, res) => {
  try {
    const nuevaTarea = new Task(req.body);
    await nuevaTarea.save();
    res.status(201).json(nuevaTarea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;