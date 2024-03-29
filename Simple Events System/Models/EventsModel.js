
/*
1- _id (Number)
2- title (required)
3- event date
4- mainSpeaker id (only one speaker will talk at the beginning of event)
5- otherSpeakers [ids] (those speaker will continue after main spekar)
6- students [ids] array containing all students added for this event    */
const mongoose=require("mongoose");

let eventSchema=new mongoose.Schema({
    _id:Number,
    title:{type:string,required:true},
    eventDate:{type:Date,default:Date.now},
    mainSpeaker:{type:mongoose.Types.ObjectId,ref:"speakers"},
    otherSpeakers:[{type:mongoose.Types.ObjectId,ref:"speakers"}],
    students:[{type:Number,ref:"students"}]

});
module.exports=mongoose.model("events",eventSchema)