const userModel = require('../models/user-model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {generateToken} = require('../utils/generateToken');

module.exports.registerUser =async(req, res) => {
    try{
        let {email,password,fullName} = req.body;
        let user= await userModel.findOne({email:email});
        if(user){
            req.flash('error', 'User already exists');
            return res.redirect('/');
        }

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
                
                let token =generateToken(user);
                res.cookie('token', token);
                res.status(201).send("user created successfully");
            });
        })

    }catch(err){
        res.send(err.message);
        
    }



}

module.exports.loginUser = async(req, res) => {
    let {email, password} = req.body;

    let user = await userModel.findOne({ email: email });
    if (!user) {

        req.flash('error','email or password is incorrect');
        return res.redirect('/');
    }
        

    bcrypt.compare(password, user.password, (err, result) => {
        if(result){
            let token = generateToken(user);
            res.cookie('token', token);
            res.status(200).send("Login successful");
        }
        else{
            res.flash("email or password is incorrect");
            return res.redirect('/');
        }
    })
}

module.exports.logout = (req, res) => {
    res.cookie('token', ''); // Clear the token cookie

    return res.redirect('/');
}