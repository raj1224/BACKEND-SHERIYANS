const express = require('express');

const app= express();
const mongooseconnection = require('./config/mongoose');
const userModel = require('./models/users')
const debuglog = require('debug')('development:app');
app.get('/',function(req,res,next){
    res.send('hey');
})
app.get('/create',async function (req,res,next) {
    let createduser = await userModel.create({
        username:'harsh',
        name:'harsh',
        email:'hasrsh@gamil.com',
        password:'pass'
    })
    debuglog('user Created');
    res.send(createduser);
    
})

app.listen(3000);


