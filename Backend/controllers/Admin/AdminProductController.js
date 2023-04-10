import Product from "../../models/Product.js";

export const getAllProducts = async (req, res, next) => {
    try{
        const products = await Product.find({})
        return res.status(200).json(products);
    } catch(err) {
        return next(err);
    }
}

export const postNewProduct = async (req, res, next) => {
    try{
        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            quantity: req.body.quantity,
            category: req.body.category
        })
        const savedProduct = await newProduct.save();
        return res.status(200).json(savedProduct);
    } catch(err) {
        return next(err);
    }
}

export const updateProduct = async (req, res, next) => {
    try{
        const product = await Product.findById(req.params.productId).exec();
        if(!product) {
            return next(createError({status: 404, message: "No task found"}))
        }

        const updateProduct = await Product.findByIdAndUpdate(req.params.productId, {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            quantity: req.body.quantity,
            category: req.body.category
        }, {
            new: true
        })
        return res.status(200).json(updateProduct)
        } catch(err) {
        return next(err);
    }
}

export const deleteProduct = async (req, res, next) => {
    try{
        const product = await Product.findById(req.params.productId).exec();
        if(!product) {
            return next({status: 404, message: "No product found"});
        }

        await Product.findByIdAndDelete(req.params.productId)
        return res.status(200).json('Product delete successfully')
    } catch(err) {
        return next(err)
    }
}
