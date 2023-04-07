import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser'

import allRoutes from './routes/index.js'

// Create express app & set a port
const PORT = process.env.PORT || 8000;
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', allRoutes);

// Error handler
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(status).json({message, stack: err.stack});
})

// Mongo database connection
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(DB_CONNECTION_STRING);
    console.log('Mongo connected');
  } catch (err) {
    console.log(err, 'Mongo connection failed');
    console.log(DB_CONNECTION_STRING)
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connectDB ? console.log('Corriendo') : console.log('Problemas') 
  console.log(`Servidor inicializado en puerto ${PORT} 🚀`);
});