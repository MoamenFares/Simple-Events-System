const studentModel=require("./../Models/StudentModel");

//Crud Operations

//Get All Students //must be admin
module.exports.GetAllStudents=((request,response,next)=>{

    if (request.role != "admin")
      throw new Error("Not Authorized...");

    studentModel.find({})
    .then((data)=>{
        if(data.length==0)
        throw new error("No data");
        response.status(200).json({ data });
    })
    .catch(error=>next(error))
});

//Get Student By Id //admin or the same student
module.exports.GetStudentById=((request,response,next)=>{
    if (request.role != "admin"){
        if((request.role != "student") || (request.params.id != request._id))
        throw new Error("Not Authorized...");
    }
    
// console.log(request._id);
// console.log(request.params.id);
    studentModel.find({"_id":request.params.id})
    .then((data)=>{
        if(data.length==0)
        throw new error("No data");
        response.status(200).json({data}) ;
    })
    .catch(error=>next(error))
});

//create New Student //register or by admin
module.exports.CreateStudent=((request,response,next)=>{
    if (request.role == "speaker")
    throw new Error("Not Authorized...");
   let std=new studentModel({
    _id:request.body.id,
    name:request.body.name,
    Email:request.body.Email,
    password:request.body.password
   })
   std.save()
   .then((data)=>{
    if (request.role == "admin") {
        response.status(200).json({ message: "Student Created" });
    }
    else {
        response.status(200).json({ message: "AcCount Created Successfully, Please Login" });
    }
    // console.log("student created");
   })
   .catch((error)=>{
       next(error)
       console.log(error+"")
   });
});

//Update Student
module.exports.UpdateStudent = ((request,response,next) => {
    if (request.role != "admin")
        if (request.role != "student" || request.body.id != request._id)
            throw new Error("Not Authorized...");

            if(request.role == "admin"){
            
    studentModel.updateOne({"_id":request.body.id},{
        $set:{
            // name:request.body.name,
            Email:request.body.Email,
            // password:request.body.password     
        }
    }).then((data)=>{
        if(data.matchedCount==0)
        throw new error("Student Not Found!")
        // if(data.modifiedCount==0)
        // response.status(200).json({ message: "std updated",data });


        response.status(200).json({ message: "std updated",data });
    }).catch((error)=>{
        next(error)
        console.log(error+"")
    })}
    else{ // The student himself 
        

            
            studentModel.updateOne({"_id":request.body.id},{
                $set:{
                    name:request.body.name,
                    Email:request.body.Email,
                    password:request.body.password     
                }
            }).then((data)=>{
                if(data.matchedCount==0)
                throw new error("Student Not Found!")
                response.status(200).json({ message: "std updated",data });
            }).catch((error)=>{
                next(error)
                console.log(error+"")
            })}
    
});

//delete Student
module.exports.DeleteStudent = ((request,response,next) => {
    if (request.role != "admin")
    if (request.role != "student" || request._id != request.params.id)
        throw new Error("Not Authorized...");
    studentModel.deleteOne({"_id":request.params.id})
    .then((data)=>{
        if(data.deletedCount==0)
        throw new error("Student Not deleted!")
        response.status(200).json({ message: "std deleted",data })
    }).catch((error)=>{
        next(error)
        console.log(error+"")
    });
    
});