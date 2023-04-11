import express from 'express';
import {getUserOrders} from '../controllers/Users/UserOrdersController.js';
import {getUserProfile, updateUserProfile} from '../controllers/Users/UserController.js';
import {getUserCart, postUserCartElement, deleteUserCartElement} from '../controllers/Users/UserCartController.js';

const router = express.Router();

// Cart Endpoints
router.get('/cart', getUserCart);
router.post('/cart/:productId', postUserCartElement);
router.delete('/cart', deleteUserCartElement);

// Orders Endpoints
router.use('/orders', getUserOrders);

// Profile Endpoints
router.get('/profile', getUserProfile)
router.put('/profile', updateUserProfile)

export default router;