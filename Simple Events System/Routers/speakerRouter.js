const express=require("express");

const speakerController=require("./../Controllers/speakerController");
const authMW=require("./../Middleware/authMiddleware")

const router=express.Router();

router.route("/speakers")
.get(speakerController.getAllSpeakers)
.post(authMW,speakerController.createSpeaker)
.put(authMW,speakerController.updateSpeaker)

router.route("/speakers/:id?")
.get(speakerController.getSpeakerById)
.delete(authMW,speakerController.deleteSpeaker)

module.exports=router;