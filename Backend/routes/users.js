import express from 'express';
import {getUserOrders, postUserOrder} from '../controllers/Users/UserOrdersController.js';
import {getUserProfile, updateUserProfile} from '../controllers/Users/UserController.js';
import {getUserCart, postCartItem, deleteCartItem} from '../controllers/Users/UserCartController.js';

const router = express.Router();

// Cart Endpoints
router.get('/cart', getUserCart);
router.post('/cart/add/:productId', postCartItem);
router.delete('/cart/delete/:productId', deleteCartItem);

// Orders Endpoints
router.get('/orders', getUserOrders);
router.post('/orders/add', postUserOrder);

// Profile Endpoints
router.get('/profile', getUserProfile)
router.put('/profile', updateUserProfile)

export default router;