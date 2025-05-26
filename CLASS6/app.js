// seeting up parsers for form
// setting up ejs for ejs pages
// setting up public static files 

// dynamic routing

const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {    
    res.send('Hello World');
}
);
app.get('/ejs',(req,res)=>{
    res.render('index');
})
app.get('/profile/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
}
);

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
}
);