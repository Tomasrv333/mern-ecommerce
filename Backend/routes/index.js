import express from "express";
import authRoutes from './auth.js';
import usersRoutes from './users.js';
import adminRoutes from './admin.js';
import { getAllProducts } from "../controllers/ProductController.js";
import { checkUserAuth, checkAdminAuth } from '../Utils/checkAuth.js';

const router = express.Router();

router.get('/', getAllProducts);

router.use('/auth', authRoutes);
router.use('/user', checkUserAuth, usersRoutes);
router.use('/admin', checkAdminAuth, adminRoutes);

export default router;