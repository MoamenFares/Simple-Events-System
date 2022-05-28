module.exports.getHome=(request,response,next)=>{
    response.status(200).json({ message: "Home Page" });
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
}