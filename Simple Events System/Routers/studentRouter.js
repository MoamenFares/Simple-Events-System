const express=require("express");
const {body,param,query} =require("express-validator");

const StudentController=require("./../Controllers/studentController");
const authMW=require("./../Middleware/authMiddleware")
const router=express.Router();

router.route("/students")
.get(authMW,StudentController.GetAllStudents)
.post([
    body("id").isInt().withMessage("id must be intger!"),
    body("Email").isEmail().withMessage("Email must be in the right form!"),
    body("name").isAlpha().withMessage("name must be in the right form!")
],authMW,StudentController.CreateStudent)
.put([
    body("id").isInt().withMessage("id must be intger!"),
    body("Email").isEmail().withMessage("Email must be in the right form!"),
    body("name").isAlpha().withMessage("name must be in the right form!")
],authMW,StudentController.UpdateStudent)


router.route("/students/:id?")
.get(authMW,StudentController.GetStudentById)
.delete(authMW,StudentController.DeleteStudent)

module.exports=router;
