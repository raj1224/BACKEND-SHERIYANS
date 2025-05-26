// // 1. how to set cookie adn read cookie in express
// // 2. how to use bcrypt in express for passoword encryption and decryption.
// // 3. JWT token in express


// const express = require('express');
// const cookieParser = require('cookie-parser');
// const bcrypt = require('bcrypt');

// const app = express();
// app.use(cookieParser());

// // app.get('/', (req, res) => {
// //     res.cookie('name','raj');
// //     res.send('done');
// // }
// // );
// app.get('/', (req, res) => {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash('mypassword', salt, (err, hash) => {
//             console.log(hash); 
//             res.send(hash);
//         })
// });
// })
// app.get('/check',(req,res)=>{
//     bcrypt.compare('mypassword', '$2b$10$kyOnVk9y/pMiNKYkvt/LXeTUkL.3B9cNMfiERVay9Fub24rYAFbxO', (err, result) => {
//         if (result) {
//             console.log('Password is correct');
//         } else {
//             console.log('Password is incorrect');
//         }
//     }
// );
// })

// app.get('/read', (req, res) => {
//     console.log(req.cookies);
//     res.send('read page')
    
// }
// );
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// }
// );

// JWT 

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.get('/', (req, res) => {
    const token = jwt.sign({ emalil: 'raj1812@gmail.com' },'secretkey');
    res.cookie('token', token);
    res.send('Token created and cookie set');
}
);
app.get('/read', (req, res) => {
    let data = jwt.verify(req.cookies.token, 'secretkey');
    console.log(data);
}
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);