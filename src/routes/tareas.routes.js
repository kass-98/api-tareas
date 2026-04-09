import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hola, clase continuando con nuestra api desde el archivo de rutas')
});

export default router;