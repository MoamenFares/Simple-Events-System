
//Crud Operations

//Get All events
module.exports.getAllEvents=((request,response,next)=>{
    response.status(200).json({ message: "List Of Events" });
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
});

//Get event By Id
module.exports.getEventById=((request,response,next)=>{
    response.status(200).json({ message: "Event By Id" });
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
});

//create New event
module.exports.createEvent=((request,response,next)=>{
    response.status(201).json({ message: "create event" });
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
});

//Update event
module.exports.updateEvent = ((request,response,next) => {
    response.status(200).json({ message: "update event" });
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
});

  //delete event
module.exports.deleteEvent = ((request,response,next) => {
    response.status(200).json({ message: "Delete event" });
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
});