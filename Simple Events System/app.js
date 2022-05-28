const express=require("express");
const mongoose = require("mongoose");
const body_parser = require("body-parser");


const homeRouter=require("./Routers/homeRouter");
const studentRouter=require("./Routers/studentRouter");
const speakerRouter=require("./Routers/speakerRouter");
const eventRouter=require("./Routers/eventRouter");
const authRouter=require("./Routers/authRouter");


const server=express();
mongoose.connect("mongodb://localhost:27017/EventSystem")
.then(()=>{
    console.log("DB Connected");
        server.listen(process.env.PORT||8080,()=>{
        console.log("I'm Listening.....");
});

})
.catch(error=>{console.log("Error occured")})

// Logger Middle Ware
server.use((request, response, next) => {
    console.log(request.url, request.method);
    next();
});

// Cors

//body parser
server.use(body_parser.json());
server.use(body_parser.urlencoded({extended:false}));
//routes
server.use(authRouter);
server.use(homeRouter);
server.use(studentRouter);
server.use(speakerRouter);
server.use(eventRouter);

//NotFound MW
server.use((request,response)=>{
    response.status(404).json({message:"Page is Not Found!"});
});

//Error MW
server.use((error,request,response,next)=>{
    response.status(500).json({message:error+""})
});