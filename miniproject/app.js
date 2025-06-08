const express = require('express');
const app = express();
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const postModel = require('./models/post');
const path = require('path');

// const multer = require('multer');
const crypto = require('crypto');

const upload = require('./config/multerconfig');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/images/uploads');
//   },
//   filename:function (req, file, cb) {
//     crypto.randomBytes(12, (err, bytes)=> {
//       const fn = bytes.toString('hex')+path.extname(file.originalname);
//       cb(null, fn);
//     })
//   }

// })
// const upload = multer({ storage: storage });

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// register a new user
app.get('/', (req, res) => {
  res.render('index');
}
);

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
            let token = jwt.sign({email:email,userid:user._id},"secretkey");
            res.cookie('token',token)
            res.send('registered successfully');
        })
    })
  // res.render('index');
}
);
// login the user account
app.get('/login', (req, res) => {
  res.render('login');
}
);

app.post('/login', async(req, res) => {
    let {email,password} = req.body;
    let user = await userModel.findOne({email});

    if(!user) return res.status(500).send('Something went wrong');

    bcrypt.compare(password,user.password,(err,result)=>{
      // result me true ya false aayega
        if(result) {
          // res.status(200).send('Login successful');
          let token = jwt.sign({email:email,userid:user._id},"secretkey");
           res.cookie('token',token);
           res.status(200).redirect('/profile');
        }
        else res.redirect('/login');
    }
    )
    
  // res.render('index');
}
);

// logout the user account
app.get('/logout',(req,res)=>{
  res.cookie('token','');
  res.redirect('/login');
})

// profile page of the user
app.get('/profile',isLoggenIn, async(req, res) => {
  // console.log(req.user);
  // res.render('login')
  
  let user = await userModel.findOne({email:req.user.email}).populate('posts')
  // console.log(user);

  
  res.render('profile',{user})
  
}) 

// create a post
app.post('/post',isLoggenIn, async(req, res) => {
  let user = await userModel.findOne({email:req.user.email});
  let {content}=req.body;
  let post = await postModel.create({
    userId:user._id,
    content:content,
  });
  user.posts.push(post._id);
  await user.save();
  res.redirect('/profile');
})

// Like a post
app.get('/like/:id',isLoggenIn, async(req, res) => {
  let post = await postModel.findOne({_id:req.params.id}).populate('user');
  if(post.likes.indexOf(req.user.userid) === -1) {
    post.likes.push(req.user.userid);
  }else{
    post.likes.splice(post.likes.indexOf(req.user.userid), 1);
  }

  await post.save();
  res.redirect('/profile');
})
// Edit a post
app.get('/edit/:id',isLoggenIn, async(req, res) => {
  let post = await postModel.findOne({_id:req.params.id}).populate('user');
  res.render('edit',{post})
})
app.post('/update/:id',isLoggenIn, async(req, res) => {
  let post = await postModel.findOneAndUpdate({_id:req.params.id},{content:req.body.content});
  res.render('edit',{post})
})


function isLoggenIn(req, res, next) {
  // console.log(req.cookies);
  if(req.cookies.token==="")res.redirect("/login");
  else{
    let data = jwt.verify(req.cookies.token,"secretkey");
    // to data me email and userid aayega
    req.user= data;
  }
  next();
}

// Multer file upload

// app.get('/test', (req, res) => {
//   res.render('test');
// }
// );
// app.post('/upload', upload.single('image'), (req, res) => {
//   console.log(req.file);
//   // res.send('File uploaded successfully');
// }
// );
  
// require multer config
app.get('/test', (req, res) => {
  res.render('test');
}
);
app.post('/upload',isLoggenIn, upload.single('image'), async(req, res) => {
  let user = await userModel.findOne({email:req.user.email});
  user.profilepic = req.file.filename;
  await user.save();
  res.redirect('/profile');
  // console.log(req.file);
  // res.send('File uploaded successfully');

  // res.redirect('/test');
}
);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
);