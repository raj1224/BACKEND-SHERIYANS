// Products

// image
// name
// price
// discount
// bgcolor
// panelcolor
// textcolor

const mongoose = require('mongoose');

const productSchema =  mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    bgcolor: { type: String },
    panelcolor: { type: String, default: '#f0f0f0' },
    textcolor: { type: String, default: '#000000' }
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;