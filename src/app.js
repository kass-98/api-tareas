import express from 'express';
import dotenv from 'dotenv';
import conectDB from './config/db.js';
import tareasRoutes from './routes/tareas.routes.js';

// Cargar variables de entorno
dotenv.config();
 
// conectar a la base de datos
conectDB();

const PORT = process.env.PORT; // tomará 5000 desde .env
const app = express();

app.use(express.json());

app.use('/', tareasRoutes);

// iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando 😉 en http://localhost:${PORT}`);
});