// const express = require('express');
// const app = express()

// app.get('/',function(req,res){
//     res.send('working')
// })
// app.post('/',function(req,res){
//     res.send('working')
// })
// app.put('/',function(req,res){
//     res.send('working')
// })
// app.patch('/',function(req,res){
//     res.send('working')
// })
// app.delete('/',function(req,res){
//     res.send('working')
// })
// app.listen(3000);


// ERROR HANDLING

const express = require('express');
const app = express();
var data = [1,2,3,4,5];

app.get('/',function(req,res,next){
    try{
        res.send(hey)
    }
    catch(err){
        next(err)
    }
})
app.get('/data',(req,res)=>{
    res.send(data)
})
app.post('/data/:number',(req,res)=>{
    data.push(parseInt(req.params.number));
    res.send(data);
})
app.use((err,req,res,next)=>{
    res.status(500).send(err.message)
})

app.listen(3000);
