import express from 'express';
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});