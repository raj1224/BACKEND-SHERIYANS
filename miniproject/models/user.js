const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miniproject')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    email:String,
    age:Number,
    name:String,
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }],
})

module.exports = mongoose.model('User', userSchema);