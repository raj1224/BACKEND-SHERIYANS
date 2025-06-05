const express = require('express');

const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');



app.get('/', (req, res) => {
  res.send('Hello, World!');
}
);

app.get('/create',async(req,res)=>{
    let user = await userModel.create({
        username: 'john_doe',
        age:21,
        email:'raj@gmail.com'
    });
    res.send(user);
})
app.get('/post/create',async(req,res)=>{
    let post = await postModel.create({
        postdata: 'This is a sample post',
        user: '6841be8c23b86f3e8a167272' 
    });
    let user = await userModel.findOne({_id:'6841be8c23b86f3e8a167272'});
    user.posts.push(post._id);
    await user.save();
    res.send({user, post});
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
);