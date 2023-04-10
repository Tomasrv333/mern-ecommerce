import Product from "../models/Product.js";

export const getAllProducts = async (req, res, next) => {
    try{
        const products = await Product.find({})
        return res.status(200).json(products);
    } catch(err) {
        return next(err);
    }
}