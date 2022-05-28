const jwt=require("jsonwebtoken");
const student=require("./../Models/StudentModel");
const speaker=require("./../Models/SpeakerModel");
//login
module.exports.login=(request,response,next)=>{
let token;
    if (request.body.Email == "admin" && request.body.password == "12345") {
        token= jwt.sign({
              _id: 0,
            Email: "admin",
            role: "admin"
            },   "ThisIsUserForThisWebSite", 
            { expiresIn: "1h" }
            );
            data={
                _id: 0,
                Email: "admin",
                role: "admin",
                token:token
            }
response.status(200).json({data});
}
else if(request.body.role=="student"){
    student.findOne({Email:request.body.Email,password:request.body.password})
    .then((data)=>{
        if (data == null)
        throw new Error("Email or Password isn't correct");
        token = jwt.sign({
            _id: data._id,
            Email: data.Email,
            role: "student"
        },  "ThisIsUserForThisWebSite", 
        { expiresIn: "1h" }
        );
        role = request.body.role;
        response.status(200).json({ data, token, role });
    }).catch(error=>next(error))

}

else if(request.body.role=="speaker"){
    speaker.findOne({Email:request.body.Email,password:request.body.Password})
    .then((data)=>{
        if (data == null)
        throw new Error("Email or Password isn't correct");
        token = jwt.sign({
            _id: data._id,
            Email: data.Email,
            role: "speaker"
        },  "ThisIsUserForThisWebSite", 
        { expiresIn: "1h" }
        );
        role = request.body.role;
        response.status(200).json({ data, token, role });
    }).catch(error=>next(error))

}
else
response.status(401).json({ message: "please login again" });
}

module.exports.register=(request,response,next)=>{
    response.status(201).json({ message: "register" });
}