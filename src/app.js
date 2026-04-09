import express from 'express';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT; // tomará 5000 desde .env
const app = express();

app.get('/', (req, res) => {
  res.send("API funcionando 🚀");
});

// iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando 😉 en http://localhost:${PORT}`);
});