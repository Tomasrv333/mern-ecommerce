import User from "../../models/User.js";

export const getUserCart = async (req, res, next) => {
    try{
        const products = await Product.find({})
        return res.status(200).json(products);
    } catch(err) {
        return next(err);
    }
}

export const postUserCartElement = async (req, res, next) => {
    try {
        const { userId, product } = req.body;
    
        // busca al usuario por ID
        const user = await User.findById(userId);
    
        // agrega el producto al carrito del usuario
        user.carrito.push(product);
    
        // guarda los cambios en la base de datos
        await user.save();
    
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
