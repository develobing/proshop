import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middlewares/errorHandler.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

// Setup
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

// Routes
app.get('/', (req, res) => res.send('API is running..'));
app.use('/api/products', productRoutes);

// Error handler
app.use(notFound);
app.use(errorHandler);

// Run server
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);