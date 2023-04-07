import express from "express";
import authRoutes from './auth';
import usersRoutes from './users';
import productsRoutes from './products';
import shoppingCartRoutes from './shoppingCart';
import ordersRoutes from './orders';

const router = express.Router();

export default router;