const speakerModel = require("./../Models/SpeakerModel");
//Crud Operations

//Get All speakers
module.exports.getAllSpeakers = (request, response, next) => {
  speakerModel
    .find({})
    .then((data) => {
      if (data.length == 0) throw new error("No data");
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

//Get speaker By Id
module.exports.getSpeakerById = (request, response, next) => {
  speakerModel
    .find({ _id: request.params.id })
    .then((data) => {
      if (data.length == 0) throw new error("No data");
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

//create New speaker
module.exports.createSpeaker = (request, response, next) => {
  speakerModel
    .find({ Email: request.body.Email })
    .then((Data) => {
      if (Object.keys(Data).length != 0) {
        //exist
        console.log("Already Exists");
        throw new error("Duplicated Email");
      } else {
        let speaker = new speakerModel({
          Email: request.body.Email,
          UserName: request.body.UserName,
          Password: request.body.Password,
          Address: {
            city: request.body.Address.city,
            street: request.body.Address.street,
            building: request.body.Address.building,
          },
        });
        speaker
          .save()
          .then((data) => {
            response.status(201).json({ message: "speaker created", data });
            console.log("speaker created");
          })
          .catch((error) => {
            next(error);
            console.log(error + "");
          });
      }
    })
    .catch((error) => {
      next(error);
      console.log(error + "");
    });
};

//Update speaker
module.exports.updateSpeaker = (request, response, next) => {
  if (request.role !== "admin")
        if (request.role !== "speaker" || request.body.id !== request._id)
        throw new Error("Not Authorized...");
        if (request.role == "admin") {
  speakerModel
    .updateOne(
      { Email: request.body.Email },
      {
        $set: {
          // UserName: request.body.UserName,
          Email:request.body.Email,
          // Password: request.body.Password,
          Address: {
            city: request.body.Address.city,
            street: request.body.Address.street,
            building: request.body.Address.building,
          },
        },
      }
    )
    .then((data) => {
      if (data.matchedCount == 0) 
      throw new error("Student Not Found!");
      response.status(200).json({ message: "std updated", data });
    })
    .catch((error) => {
      next(error);
      console.log(error + "");
    });
}
else {
  
    speakerModel
      .updateOne(
        { Email: request.body.Email },
        {
          $set: {
            UserName: request.body.UserName,
            Email:request.body.Email,
            Password: request.body.Password,
            Address: {
              city: request.body.Address.city,
              street: request.body.Address.street,
              building: request.body.Address.building,
            },
          },
        }
      )
      .then((data) => {
        if (data.matchedCount == 0) 
        throw new error("Student Not Found!");
        response.status(200).json({ message: "std updated", data });
      })
      .catch((error) => {
        next(error);
        console.log(error + "");
      })
  }
}


//delete speaker
module.exports.deleteSpeaker = (request, response, next) => {
  if (request.role !== "admin")
        if (request.role !== "speaker" || request._id !== request.params.id)
            throw new Error("Not Authorized...");
            Speaker.deleteOne({ _id: request.params.id })
            .then(data => {
                response.status(200).json({ message: "Speaker Deleted", data });
            })
            .catch(error => next(error))
    }