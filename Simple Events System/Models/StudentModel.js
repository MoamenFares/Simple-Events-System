/*
Student:
1- _id (Number)
2- Email which is unique
3- password */

const mongoose=require("mongoose");

let studentSchema=new mongoose.Schema({
    _id:Number,
    Email:String, //will check to be unique
    password:String, //enc
    name:String
});

module.exports=mongoose.model("students",studentSchema);