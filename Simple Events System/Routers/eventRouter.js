const express=require("express");
const eventController=require("./../Controllers/eventController")
const authMW=require("./../Middleware/authMiddleware")

const router=express.Router();


router.route("/events")
.get(eventController.getAllEvents)
.post(authMW,eventController.createEvent)
.put(authMW,eventController.updateEvent)
.delete(authMW,eventController.deleteEvent)

router.route("/events/:id?")
.get(eventController.getEventById)
.put(authMW,eventController.updateEvent)
.delete(authMW,eventController.deleteEvent)

module.exports=router;
