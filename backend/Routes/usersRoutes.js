//Registration
const AuthController = require("../Controllers/AuthController");
const UserController = require("../Controllers/UserController");
const authuserMiddleware = require("../MiddleWares/authuserMiddleware");
const userValid = require("../Utils/AuthValidate");
// const userModel = require("../Models/usersModel");

const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");

//#region Auth
router.post("/signup", AuthController.AddNewUser);
router.post("/login", AuthController.logIn);
router.get("/logout", AuthController.logout);
//#endregion

// upload profile pic
router.post(
  "/upload-profile-pic",
  UserController.upload.single("file"),
  UserController.UploadProfilePic
);

//#region User
router.get("/latest8users", authuserMiddleware, UserController.getLatest8users);

router.get("/", authuserMiddleware, UserController.GetAllUsers);
router.get("/:id", authuserMiddleware, UserController.GetUserByID);
router.post("/:id", authuserMiddleware, UserController.UpdateUserByID);
router.delete("/:id", authuserMiddleware, UserController.DeleteUserByID);
//#endregion

// var id = 0;

// router.post("/",async(req,res)=>{
//     //Add New User ===> exist???? ==> user Already Exist ===> Add
//     //new Object from body ===> u.save();
//     try{

//         let founduser = await userModel.findOne({email:req.body.email}).exec();
//         if(founduser) return res.status(400).send("User Already Exist");

//         var salt = await bcrypt.genSalt(10);
//         var hashedPassword = await bcrypt.hash(req.body.password,salt);
//         var user = new userModel({
//             name:req.body.name,
//             email:req.body.email,
//             // password:req.body.password
//             password:hashedPassword
//         })
//         var valid = userValid(user);
//         if(valid){
//             await user.save();
//             res.status(201).send("User Added Successfully");
//         }else{
//             res.status(400).send("Not Compatible..")
//         }
//     }catch(err){
//         console.log(err);
//     }
// })

module.exports = router;
