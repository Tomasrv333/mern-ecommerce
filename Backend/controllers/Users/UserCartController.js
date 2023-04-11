import User from "../../models/User.js";
import Product from '../../models/Product.js';

export const getUserCart = async (req, res, next) => {
    try{
        const data = await User.findById(req.user.id).select('cart');
        const userCart = data.cart
        console.log(userCart)
        return res.status(200).json(userCart);
    }catch(err) {
        return next(err);
    }
}

export const postUserCartElement = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.productId).exec();
        if(!product) {
            return next({status: 404, message: "Producto no disponible"})
        }
    
        const data = await User.findById(req.user.id).select('cart');
        const userCart = data.cart;
        console.log(data.cart)

        for (id in data.cart) {
            console.log(id)
        }
        const productExist = data.cart.filter(id => id._id === req.params.productId)
        console.log(productExist)
        if (productExist.length > 0) {
            return next({status: 400, message: "El producto ya ha sido añadido"})
        }

        data.cart.push(product);

        await data.save();
    
        res.status(200).send('Producto agregado al carrito correctamente');
      } catch (error) {
        console.log(error);
        res.status(500).send('Error al agregar el producto al carrito');
      }
}

export const deleteUserCartElement = async (req, res, next) => {
    try{
        
    }catch(err) {
        
    }
}
