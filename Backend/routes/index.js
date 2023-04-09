import express from "express";
import authRoutes from './auth.js';
import usersRoutes from './users.js';
import adminRoutes from './admin.js';
import productsRoutes from './products.js';

const router = express.Router();

router.get('/', getAllProducts);

router.use('/auth', authRoutes);
router.use('/user', checkAuth, usersRoutes);
router.use('/admin', checkAuth, adminRoutes);

export default router;