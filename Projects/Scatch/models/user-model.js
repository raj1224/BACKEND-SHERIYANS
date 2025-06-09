// usermodel
// full name-string
// email-string
// password-string
// cart-string
// isadmin-boolean
// orders-array
// contanct-Number
// pic-db

const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: { type: Array, default: [] },
    orders: { type: Array, default: [] },
    contactNumber: { type: Number},
    picture: { type: String, default: '' }

});
const User = mongoose.model('User', userSchema);
module.exports = User;