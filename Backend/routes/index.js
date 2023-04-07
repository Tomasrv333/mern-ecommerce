import express from "express";
import authRoutes from './auth.js';
import usersRoutes from './users.js';
import adminRoutes from './admin.js';
import productsRoutes from './products.js';
import cartRoutes from './cart.js';
import ordersRoutes from './orders.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/admin', checkAuth, adminRoutes);

export default router;