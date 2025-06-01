const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/')
.then(() => {
    console.log('Connected to MongoDB');
}
)
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
}
);

const userSchema = new mongoose.Schema({
    image:String,
    email:String,
    name:String
})
module.exports = mongoose.model('user',userSchema)