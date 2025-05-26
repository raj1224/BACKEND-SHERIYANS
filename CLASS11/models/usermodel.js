const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/')

const userSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('User', userSchema);