const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullName: { type: String,
         required: true ,
            trim: true,
            minlength: 3,
        },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gstin:String,
    picture: { type: String, default: '' }
});
const Owner = mongoose.model('Owner', ownerSchema);
module.exports = Owner;