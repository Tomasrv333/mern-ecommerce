import express from "express";
import { getAllProduct, getOneProduct, postOneProduct, updateOneProduct, deleteOneProduct } from "../controllers/product.js";

const router = express.Router();

router
    .get('/', getAllProduct)
    .get('/:productId', getOneProduct)
    .post('/newProduct', postOneProduct)
    .put('/:productId', updateOneProduct)
    .delete('/:productId', deleteOneProduct)

export default router;