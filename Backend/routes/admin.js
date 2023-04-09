import express from 'express';
import {getAllProducts, postNewProduct, updateProduct, deleteProduct} from '../controllers/Admin/AdminProductController.js';
import {getAllOrders, getOneOrder, updateOrder} from '../controllers/Admin/AdminOrderController.js';

const router = express.Router();

// Products Endpoints
router.get('/products', getAllProducts)
router.post('/products', postNewProduct)
router.put('/products/:productId', updateProduct)
router.delete('/products/:productId', deleteProduct)

// Orders Endpoints
router.get('/orders', getAllOrders)
router.get('/orders/:orderId', getOneOrder)
router.put('/orders/:orderId', updateOrder)

export default router;