// form handling and working with forms

// session-server
// cookies-browser

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.send('champion mera anuj')
})

