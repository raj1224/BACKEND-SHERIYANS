const express = require('express');
const app = express();
const fs = require('fs');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        res.render('index',{files:files});
    })
}
);
app.post('/create',(req,res) => {
    // console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.detail, (err) => {
        res.redirect('/');
    }
);
});
    
app.post('/edit',(req,res) => {

    fs.rename(`./files/${req.body.previous}`,  `./files/${req.body.new}`, (err) => {
        res.redirect('/');
    }
); 
    
})
app.get('/edit/:filename',(req,res)=>{
    res.render('edit',{filename:req.params.filename})
})
app.get('/files/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', (err, data) => {
        res.render('show',{filename: req.params.filename, data : data});
    });


})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
);