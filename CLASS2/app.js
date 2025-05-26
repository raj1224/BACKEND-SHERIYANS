// node.js basics:
// intro to node.js
// installing node.js
// node & npm
// working with node and npm
// npm init
// working with modules.
// file system operatons 
// understanding http module

const fs = require('fs');
// writefile

// fs.writeFile("hey.txt","helelo" ,function(err){
//     if(err) console.error(err);
//     else console.log("done"); 
// })
// // append file
// fs.appendFile("hey.txt","hi" ,function(err){
//     if(err) console.error(err);
//     else console.log("done"); 
// })
// // rename
// fs.rename("hey.txt","hello.txt" ,function(err){
//     if(err) console.error(err);
//     else console.log("done"); 
// })
// copyFile
// fs.copyFile("hello.txt","./copy/chacha.txt" ,function(err){
//     if(err) console.error(err);
//     else console.log("done"); 
// })
// // unlink
// fs.unlink("hello.txt" ,function(err){
//     if(err) console.error(err);
//     else console.log("done"); 
// })
// // rmdir
// fs.rmdir("./copy",{recursive:true} ,function(err){
//     if(err) console.error(err);
//     else console.log("removed"); 
// })
// // or
// fs.rm("./copy",{recursive:true} ,function(err){
//     if(err) console.error(err);
//     else console.log("removed"); 
// })
// try youself use of readfile

// HTTP server
const http =  require('http');
const server = http.createServer(function(req,res){
    res.end('hello')
})
server.listen(3000);