const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:cAfsMS2bif1EWSQa@cluster0.lp9n5.mongodb.net/miniproject')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    email:String,
    age:Number,
    name:String,
    profilepic:{
        type:String,
        default:'default.png'
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }],
})

module.exports = mongoose.model('User', userSchema);