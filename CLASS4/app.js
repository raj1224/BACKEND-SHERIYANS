// Express.js framework:
// intro to express.js
// setting up a basic express app
// routing
// middleware
// request and response handling
// error handling

const express = require('express');
const app = express();
app.use(function(req,res,next){
    console.log('middle ware chla');
    next();
    
})
app.get('/',(req,res,next)=>{
    // res.send('hello')
    return next(new Error('not implemented'));
})
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('something broke!')
})
app.listen(3000);