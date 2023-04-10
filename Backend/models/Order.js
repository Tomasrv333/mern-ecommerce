import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' },
    products: [
        {
          product: { type: Schema.Types.ObjectId, ref: 'Product' },
          quantity: { type: Number, default: 1 },
          price: { type: Number, required: true },
        },
    ],
    totalPrice: {
        type: Number, 
        required: true 
    },
    createdAt: {
        type: Date, 
        default: Date.now 
    },
});

export default mongoose.model("Order", orderSchema);