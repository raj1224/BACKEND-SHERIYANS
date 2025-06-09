const express = require('express');
const router = express.Router();
// Importing the owner model
const ownerModel = require('../models/owner-model');

if (process.env.NODE_ENV === 'development') {
    router.post('/create',async(req,res)=>{
        // res.send('Create a new owner');
        let owners = await ownerModel.find();
        if(owners.length > 0){
            return res
            .status(503)
            .send('Owner already exists');
        }
        // Create a new owner
        let {fullName, email, password} = req.body;
        let createdOwner = await ownerModel.create({
            fullName,
            email,
            password
        });

        res.status(201).send(createdOwner);

    })

}
router.get('/',(req,res)=>{
    res.send('Welcome to the Owners API');
})


console.log(process.env.NODE_ENV);
// set NODE_ENV=development
// export NODE_ENV =development




module.exports = router;