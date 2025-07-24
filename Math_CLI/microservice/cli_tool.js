const express= require('express');

const app= express()

app.get('/', function(req,res){
    res.send("Welcome to the Math, basic arithmetic operations CLI tool, built using Node.js and Express.js");
});

app.get('/sum/:firstArg/:secondArg', function(req,res){
    const a=parseInt(req.params.firstArg);
    const b= parseInt(req.params.secondArg);
    res.json({
        answer: a+b
    });
});

app.listen(3000, ()=>{
    console.log("Math CLI tool is running on port 3000...");
});