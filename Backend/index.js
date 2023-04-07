import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser'

const PORT = process.env.PORT || 8000;
console.log(process.env.SALUDO);

const app = express();

// Middleware 
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Servidor inicializado en puerto ${PORT} 🚀`);
    console.log('Estamos listos para recibir peticiones 🌎')
  });