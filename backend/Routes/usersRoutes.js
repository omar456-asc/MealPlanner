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

router.post("/update-data", authuserMiddleware, UserController.UpdateUserProfileData);
//#region User
router.get("/latest8users", authuserMiddleware, UserController.getLatest8users);

router.get("/", authuserMiddleware, UserController.GetAllUsers);
router.get("/:id", authuserMiddleware, UserController.GetUserByID);
router.post("/:id", authuserMiddleware, UserController.UpdateUserByID);
router.delete("/:id", authuserMiddleware, UserController.DeleteUserByID);

module.exports = router;
