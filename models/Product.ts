const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    _id: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    Image: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: String },
    size: { type: String },
    price: { type: Number, required: true },
    availableQuantity: { type: Number },
}, { timestamp: true });

export default mongoose.model('Product', ProductSchema)