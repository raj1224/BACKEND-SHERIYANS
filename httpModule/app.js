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

const express = require('express')

const app= express();
const expressSession = require('express-session');

app.use(expressSession({
    secret:"random stuff",
    resave:false,
    saveUninitialized:false,
}))

app.get('/',function(req,res){
    res.send("hey")
})
app.get("/create",function(req,res,next){
    res.session.polo=true;
    res.send("done");
})
app.get('/check',function(req,res,next){
    console.log(req.session.polo);
})
app.listen(3000);