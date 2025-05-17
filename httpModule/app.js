// const http = require("http");
// const server =http.createServer(function(req,res){
//     // console.log(req);
//     // // req-frontend
//     // //res - backend
    
//     // res.end("hello world")

//     console.log('port listning on 3000');
//     if(req.url==="/"){
//         res.end('home page')
//     }else{
//         res.end("page not found")
//     }
    

// })
// server.listen(3000);

// // HTTP METHODS
// // GET,POST,DELETE,(Update)PATH,PUT(Update)

// const express = require("express");
// const app = express();

// app.get("/",function(req,res){
//     res.send("heelo")
// })
// app.get("/home",function(req,res){
//     res.send("home page")//req handler bhi ek middle ware hota h
// })
// CREATE THIS ROUTE AT THE END
// app.get("*",function(req,res){
//     res.send("if Nothing works i will");
// })
// app.listen(3000)

// EXPRESS SESSION 
// session - data server me save hota h
// cookies = data browser me save hota h 

// const express = require('express')

// const app= express();
// const expressSession = require('express-session');

// app.use(expressSession({
//     secret:"random stuff",
//     resave:false,
//     saveUninitialized:false,
// }))

// app.get('/',function(req,res,next){
//     res.send("hey")
// })
// app.get('/create',function(req,res,next){
//     req.session.polo=true;
//     res.send("done");
// })
// app.get('/check',function(req,res,next){
//     console.log(req.session.polo);

// })
// app.listen(3000);

// FLASH

// const express = require('express')

// const app= express();
// const expressSession = require('express-session');
// const flash = require("connect-flash");


// app.use(expressSession({
//     secret:"random stuff",
//     resave:false,
//     saveUninitialized:false,
// }))
// app.use(flash());

// app.get('/',function(req,res,next){
//     req.flash('error','invalid crededntials');
//     res.redirect('/error');

// })
// app.get('/error',function(req,res,next){
//     let message = req.flash('error');
//     res.send(message);
// })

// app.listen(3000);


// CORS

// const express = require('express');
// const app = express();
// const cors= require('cors')

// // app.use(cors());
// app.get('/',function(req,res,next){
//     res.send('hey');
// })
// app.get('/shareable',cors(),function(req,res,next){
//     res.send('hey');
// })
// app.listen(3000);

// COOKIE PARSER

// const express = require('express')
// const app= express();

// const cookies = require('cookie-parser');

// app.use(cookies());

// app.get('/',function(req,res,next){
//     res.send('hey');
// })
// app.get('/check',function(req,res,next){
//     console.log(req.cookies.name);
//     res.send('checking')
// })
// app.get('/banned',function(req,res,next){
//     res.cookie('name','harsh');
//     res.send('banned');
// })
// app.listen(3000)

// MORGAN

// const express = require('express');
// const app = express();
// const morgan = require('morgan')

// app.use(morgan('combined'));
// app.get('/',function(req,res){
//     res.send('hey')

// })
// app.listen(3000)

// REQ RES


// DYNAMIC ROUTING

// const express = require('express');
// const app = express();

// app.get('/',function(req,res){
//     res.send('hey something about main page')
// })
// app.get('/about',function(req,res){
//     res.send(' something about page')
// })
// app.get('/profile/:username',function(req,res){
//     res.send(req.params.username + 's page');
// })
// app.get('/profile/:username/:age',function(req,res){
//     res.send(`something about ${req.params.username} page who is of ${req.params.age} years old`);
// })
// app.listen(3000)

// EJS

// const express = require('express');
// const app = express();


// app.set('view engine','ejs');

// app.get('/',function(req,res){
//     res.render('index');
// })
// app.listen(3000)

// FORM HANDLING

const express = require('express');
const app = express();

// GET - req.query
// POST - req.body

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('form');
})
app.post('/create',function(req,res){
    res.send('working')
    console.log(req.body);
    
})
app.listen(3000)