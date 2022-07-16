const express=require('express');

const http=require('http');

const app=express();

app.use((req,res,next)=>{
    console.log("in a middlewre");
    next();
});

app.use((req,res,next)=>{
    console.log("in another middlewre");
    res.send("<h1>hello</h1>")
});
const  server=http.createServer(app);

server.listen(3000);