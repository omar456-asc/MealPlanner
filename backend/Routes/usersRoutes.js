//Registration
const AuthController = require("../Controllers/AuthController");
const UserController = require("../Controllers/UserController");
const userValid = require("../Utils/AuthValidate");
// const authMiddleware = require("../middleware/authMiddleware");
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
router.get("/latest8users", UserController.getLatest8users);

router.get("/", UserController.GetAllUsers);
router.get("/:id", UserController.GetUserByID);
router.post("/:id", UserController.UpdateUserByID);
router.delete("/:id", UserController.DeleteUserByID);

module.exports = router;
