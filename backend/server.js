import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import logger from 'morgan';
import { notFound, errorHandler } from './middlewares/errorHandler.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

// Setup
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

// Set Express
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Middlewares
app.use(logger('dev'));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('API is running..'));
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/uploads', uploadRoutes);

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
