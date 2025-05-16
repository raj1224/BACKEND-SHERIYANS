//Fundamentals of JS
// arrays and objects
// function return
// async js coding
// foreach map filter find indexof
// reference and pritives

// PRIMITIVES AND REFERENCE
// [] {} ()-reference
// others - primitive

//OPERATOR
// var a = [1,2,3];
// var b=a;
// var b=[...a]; //spread operator
// b.pop(); 

// truthy and falsy values

// falsy - 0 false undefined NaN null "" document.all 
// truthy - others

// || and && operator

// 12 || 13 ->12
// 0 || 13 -> 13

// CONDITIONAL STATEMEN
// if else else if
// if (condition) { //condion->true or false
    
// }

// TERNARY OPERATOR
// 13>14 ? "yo":"yoyo";

// FUNCTIONS

// function name(params) {
//     // function statements
// }

// function (){
//     //anonymous functon
// }
// ()=>{
//     // fat arrow function
// }
// a=>{
//     // fat arrow function with one param
// }
// ()=>12; //fat arrow with implicit return 

// FOREACH

// var arr = [1,2,3,4];
// arr.forEach(function(val){
//     console.log(val+' hello');
    
// })

// FORIN
// var obj = {name:"raj",age:21};
// for (var val in obj) {
//     console.log(val,obj[val]);
    
// }

// MAP

// var arr= [1,2,3,4];
// var newArr =arr.map(function(val){
//     // return 13;
//     return val*3;
// })
// console.log(newArr);


// FILTER

// var arr= [1,2,3,4];
// var ans =arr.filter(function(val){
//     if(val>3){
//         return true;
//     }else return false;
    
// })

// console.log(ans);

// FIND

// var arr= [1,2,3,4];
// var ans2 = arr.find(function(val){
//     if(val===2) return val;
//     else return false;
// })

// console.log(ans2);


// INDEXOF
// var arr= [1,2,3,4];

// console.log(
// arr.indexOf(12)

// );

// OBJECTS

// var obj = {
//     name:"raj",
//     age:21
// }
// obj['name']
// obj.name

// obj.age=25;

// Object.freeze(obj)

// obj.age=15;


// how to find funciton lenght

// function abc(){

// }

// abc.length

// function abc(a,b,c){

// }

// abc.length


// how RETURN works

// function abcd(){
//     return 12;
// }


// var ans = abcd();
// console.log(ans);

// CALLBACKS
// function getsongs() {
//     setTimeout(() => {
//         console.log("songs aa gye");
        
//     }, 2000);
// }
// function getmoresongs() {
//     setTimeout(() => {
//         console.log("more songs aa gye");
        
//     }, 1200);

// }
// getsongs()
// getmoresongs()

// CALLBACK HELL       
// function connectToServer(cbfn) {
//     console.log(" connecting to server");
//     setTimeout(()=>{
//        cbfn();
// },2000)
// }
// function fetchCourses(cbfn) {
//     console.log("fetching courses");
//     setTimeout(()=>{
//         cbfn(["course 1","course 2","course 3"])
//     },2000);
    
    
// }
// connectToServer(function () {
//     fetchCourses(function(data){
//         console.log(data);
        
//     })
// })

// PROMISES

function connectToServer(){
    console.log("connecting to server...");
    return new Promise (function(resolve,reject){
        setTimeout(() => {
            resolve("connected... ")
        }, 2000);
    })
}
function getCourse(){
    console.log("getting courses...");
    return new Promise (function(resolve,reject){
        setTimeout(function(){
            resolve(["course 1","course 2","course 3"])
        },2000)
    })   
}
connectToServer()
.then(function(response){
    console.log(response);
    return getCourse()
})
.then(function(response){
    console.log(response);
    
})

// await to use krne ke liye async ke bina bhi chl skta h

// async js

// async function abcd() {
//     var blob = await fetch('https://randomuser.me/api/');
//     var ans = await blob.json();

//     console.log(ans);
//     console.log(ans.results[0].name);
    
// }
// abcd();



