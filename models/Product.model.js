import mongoose from 'mongoose';
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose) 

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true,
        default: "https://www.imgcloud.org/ib/wkxeVSruw1"
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

ProductSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500
})

module.exports = mongoose.model('Product', ProductSchema)