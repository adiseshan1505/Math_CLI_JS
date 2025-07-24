const express= require('express');

const app= express()

app.get('/', function(req,res){
    res.send("Welcome to the Math, Basic arithmetic operations CLI tool, buil using Node.js and Express.js");
});

app.listen(3000, ()=>{
    console.log("Math CLI tool is running on port 3000...");
});