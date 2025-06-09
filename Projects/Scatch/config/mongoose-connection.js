const mongoose = require('mongoose');
const config = require('config');

// degugger: This code connects to a MongoDB database using Mongoose.
const dgbr= require('debug')('development:mongoose');
// terminal: export DEBUG=development:*
// or export DEBUG=





mongoose.connect(`${config.get('MONGODB_URI')}/Scatch`)
.then(()=>{
    // console.log('Connected to MongoDB');
    dgbr('Connected to MongoDB');
})
.catch((err)=>{
    // console.error('Error connecting to MongoDB:', err);
    dgbr('Error connecting to MongoDB:', err);
});

const db = mongoose.connection;
module.exports = db;