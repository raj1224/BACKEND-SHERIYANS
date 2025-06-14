const express = require('express');
const router = express.Router();
// const {registerUser,loginUser }= require('../controller/authController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const { registerUser, loginUser, logout } = require('../controller/authController');


router.get('/', (req, res) => {
    res.send('Welcome to the Users API');
}
);
router.post('/register',registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);
module.exports = router;