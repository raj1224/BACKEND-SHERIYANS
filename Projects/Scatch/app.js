const express = require('express');
const app = express();

const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// Importing the database connection
const db = require('./config/mongoose-connection');

// Importing the routers
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter.js'); 
const indexRouter = require('./routes/index');

const expressSession = require('express-session');
const flash = require('connect-flash');
app.use(
    expressSession({
        resave:false,
        saveUninitialized: false,
        secret:process.env.EXPRESS_SESSION_SECRET ,
    })
)
app.use(flash());

// dotenv configuration
require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes connection
app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.use('/', indexRouter);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}
);