import User from '../../models/User.js';
import Product from '../../models/Product.js';
import Order from '../../models/Order.js';

export const getUserOrders = async (req, res, next) => {
    try{
        const orders = await Order.find({})
        return res.status(200).json(orders);
    } catch(err) {
        return next(err);
    }
}

export const postUserOrder = async (req, res, next) => {
    try{
        const userId = req.user.id;
        const user = await User.findById(userId);
        const products = user.cart.map(item => ({
            product: item.product._id,
            quantity: item.quantity,
            price: item.price
        }));

        // Sumar el precio de los productos dentro de la ordern
        const totalPrice = products.map(item => item.price).reduce((acc, curr) => acc + curr, 0);

        const newOrder = new Order({
            user: userId,
            products: products,
            totalPrice: totalPrice
        })

        const savedOrder = await newOrder.save()
        
        return res.status(200).json(savedOrder);
    }catch(err) {
        return next(err);
    }
}