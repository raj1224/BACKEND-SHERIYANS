const express = require('express');
const app = express();
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const postModel = require('./models/post');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.render('index');
}
);
app.get('/login', (req, res) => {
  res.render('login');
}
);
app.get('/profile',isLoggenIn, async(req, res) => {
  let user = await userModel.findOne({email:req.user.email});
  console.log(user);
  
  res.render('profile',{user})
  
})
app.post('/register', async(req, res) => {
    let {name,username,password,email,age} = req.body;
    let user = await userModel.findOne({email});

    if(user) return res.status(500).send('User already exists');

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async(err,hash)=>{
            let user = await userModel.create({
                username,
                email,
                age,
                name,
                password:hash,
            });
            let token = jwt.sign({email:email,userid:user._id},"shhhh");
            res.cookie('token',token)
            res.send('registered successfully');
        })
    })
  // res.render('index');
}
);
app.post('/login', async(req, res) => {
    let {email,password} = req.body;
    let user = await userModel.findOne({email});

    if(!user) return res.status(500).send('Something went wrong');

    bcrypt.compare(password,user.password,(err,result)=>{
        if(result) {
          let token = jwt.sign({email:email,userid:user._id},"shhhh");
           res.cookie('token',token);
           res.status(200).redirect('/profile ');
        }
        else res.redirect('/login');
    }
    )
    
  // res.render('index');
}
);
app.get('/logout',(req,res)=>{
  res.cookie('token','');
  res.redirect('/login');
})

function isLoggenIn(req, res, next) {
  // console.log(req.cookies);
  if(req.cookies.token==="")res.redirect("/login");
  else{
    let data = jwt.verify(req.cookies.token,"shhhh")
    req.user= data;
    next();
  }
}
  

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
);