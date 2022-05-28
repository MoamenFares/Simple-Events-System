const express=require("express");
const homeController=require("./../Controllers/homeController")

const router=express.Router();

router.route("/")
.get(homeController.getHome)

router.route("/home")
.get(homeController.getHome)
module.exports=router;