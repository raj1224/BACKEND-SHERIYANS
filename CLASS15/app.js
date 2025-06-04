const express = require('express');
const app = express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const path = require('path');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index')
    // res.send('index')
})
app.post('/create',(req,res)=>{
    const {username,email,password}=req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async(err,hash)=>{
            let user = await userModel.create({
                username: username,
                email: email,
                password: hash
            });
            let token = jwt.sign({email},"secretkey");
            res.cookie('token',token);
            res.send(user);

        })

    })

})
app.get('/logout',(req,res)=>{
    res.cookie('token','');
    res.redirect('/');
})

app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('/login',async(req,res)=>{
    let user = await userModel.findOne({email:req.body.email});
    if(!user) return res.status(400).send('User not found');


    bcrypt.compare(req.body.password,user.password,(err,result)=>{
        if(result){ 
            let token = jwt.sign({email:user.email},"secretkey");
            res.cookie('token',token);
            res.send('Login successful');
        }
        else res.status(400).send('Invalid credentials');
    }
    )
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}
);