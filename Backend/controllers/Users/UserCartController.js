import User from "../../models/User.js";
import Product from '../../models/Product.js';

export const getUserCart = async (req, res, next) => {
    try{
        const data = await User.findById(req.user.id).select('cart');
        console.log(data)
        const userCart = data.cart
        console.log(userCart)
        return res.status(200).json(userCart);
    }catch(err) {
        return next(err);
    }
}

export const postCartItem = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const productId = req.params.productId;
        const quantity = req.body.quantity;
        const product = await Product.findById(productId);

        const price = product.price
    
        if (!product) {
          return res.status(404).send('Producto no encontrado');
        }
    
        const user = await User.findById(userId);
        const cartItem = user.cart.find(item => item.product.toString() === productId);
    
        if (cartItem) {
          cartItem.quantity += quantity;
        } else {
            user.cart.push({ 
                product: productId,
                quantity: quantity,
                price: price
            });
        }
    
        await user.save();
        return res.status(200).json(user.cart);
    } catch (err) {
        return next(err);
    }
}

export const deleteCartItem = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const productId = req.params.productId;
        const user = await User.findById(userId);
        user.cart = user.cart.filter(product => product.product.toString() !== productId);
        await user.save();
        return res.status(200).json(user.cart);
    } catch (err) {
        return next(err);
    }
}
