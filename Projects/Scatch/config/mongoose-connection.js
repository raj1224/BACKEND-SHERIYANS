const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:cAfsMS2bif1EWSQa@cluster0.lp9n5.mongodb.net/Scatch')
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:', err);
});

const db = mongoose.connection;
module.exports = db;