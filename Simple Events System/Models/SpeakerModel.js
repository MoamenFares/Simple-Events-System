/* speaker:
1- _id (ObjectID)
2- Email which is unique
3- UserName
4- Password [encrypted BONUS]
5- Address (city ,street and buildin*/
const mongoose=require("mongoose");

let speakerSchema=new mongoose.Schema({
    // _id:mongoose.Types.ObjectId,
    Email:String,
    UserName:String,
    Password:String,
    Address:{
        city:String,
        street:String,
        building:String
    }
});
module.exports=mongoose.model("speakers",speakerSchema);