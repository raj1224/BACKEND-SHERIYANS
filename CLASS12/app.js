const express = require('express');

const app = express();
const userModel = require('./models/user');

const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
}
);
app.get('/read', async(req, res) => {
  let users = await userModel.find();
  res.render('read',{users});
}
);
app.post('/create', async (req,res)=>{
  const { name, email, phone } = req.body;
  let createdUser = await userModel.create({
    name,
    email,
    phone
  });
  res.redirect("/read");
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}
);
