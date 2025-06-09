const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    res.send('Welcome to the Users API');
}
);
router.post('/register',(req, res) => {
    try{
        let {email,password,fullName} = req.body;

        bcrypt.genSalt(10, async(err, salt) => {
            bcrypt.hash(password, salt, async(err, hash) => {
                if(err){
                    return res.status(500).send(err.message);
                }
                // Create a new user
                let user = await userModel.create({
                    email,
                    password: hash,
                    fullName,
                });
                let token = jwt.sign({email ,id: user._id},"secretkey");
                res.cookie('token', token);
                res.status(201).send("user created successfully");
            });
        })

    }catch(err){
        res.send(err.message);
        
    }



})
module.exports = router;