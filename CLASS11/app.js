const express = require('express');

const app = express();
const mongoose = require('mongoose');
const userModel = require('./models/usermodel');

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: 'John Doe',
        email: 'johm2@123',
        password:'dsgasg',
    })
    res.send(createdUser);
}
);
app.get('/update',async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate(
        { email: 'johm2@123' },
        { name: 'John Smith' } 
    );
    res.send(updatedUser);
}
);
app.get('/read', async (req, res) => {
    let readUser = await userModel.findOne({ email: 'johm2@123' });
    res.send(readUser);
}
);

app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({ email: 'johm2@123' });
    res.send(deletedUser);
}
);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}
);