let usersmodel = require("../Models/usersModel");
const bcrybt = require("bcrypt");
const multer = require("multer");
var path = require("path");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const usersModel = require("../Models/usersModel");

dotenv.config();

var GetAllUsers = async (req, res) => {
  try {
    var AllUsers = await usersmodel.find();
    await res.json(AllUsers);
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to get all users");
  }
};

var GetUserByID = async (req, res) => {
  try {
    var ID = req.params.id;
    res.json(await usersmodel.findById(ID));
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to get user");
  }
};

var UpdateUserByID = async (req, res) => {
  try {
    var ID = req.params.id;
    var updatedUser = req.body;
    const salt = await bcrybt.genSalt();
    await usersmodel.updateOne(
      { _id: ID },
      {
        fname: updatedUser.fname,
        lname: updatedUser.lname,
        password: await bcrybt.hash(updatedUser.password, salt),
      }
    );
    await res.send(updatedUser);
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to update new user");
  }
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadsCloud = (file, folder) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      (result) => {
        resolve({
          url: result.url,
          id: result.public_id,
        });
      },
      {
        resource_type: "auto",
        folder: folder,
      }
    );
  });
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

var GetAllUsers = async (req, res) => {
  try {
    var AllUsers = await usersmodel.find();
    await res.json(AllUsers);
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to get all users");
  }
};

var DeleteUserByID = async (req, res) => {
  try {
    var ID = req.params.id;
    await usersmodel.findByIdAndDelete(ID);
    res.send("Deleted Successfully");
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to delete user");
  }
};

var getLatest8users = async (req, res) => {
  try {
    var AllUsers = await usersmodel.find().sort({ _id: -1 }).limit(8);
    // console.log(AllUsers);
    await res.json(AllUsers);
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to get all users");
  }
};
var UploadProfilePic = async (req, res) => {
  try {
    const uploader = async (path) => await uploadsCloud(path, "Images");
    const { path } = req.file;
    const newPath = await uploader(path);
    const avatarUrl = newPath.url;
    await usersmodel.updateOne(
      { _id: req.body.userId },
      {
        avatar: avatarUrl,
      }
    );

    res.status(200).send({
      messege: "Hello from upload profile pic",
      url: avatarUrl,
      status: "ok",
    });
  } catch (e) {
    console.log(e);
    res.status(400).send("Error in upload profile pic");
  }
};

async function addMealToFavorites(req, res) {
  var userId = req.params.userId;
  const mealId = req.params.mealId;
  //console.log("mmmm");
  //console.log(userId);
  //console.log(mealId);
  try {
    const user = await usersmodel.findById(userId);
    const favorite = user.favorite;
    console.log(favorite);
    const CheckFavorite = favorite.findIndex((item) => item == mealId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the meal is already in the user's favorites
    if (CheckFavorite != -1) {
      favorite.splice(CheckFavorite, 1);
      await usersmodel.updateOne({ _id: userId }, { favorite: favorite });
      console.log(favorite);
      return res.status(400).json({ message: "Meal already in favorites" });
    }
    favorite.push(mealId);
    await usersmodel.updateOne({ _id: userId }, { favorite: favorite });
    //await user.save();

    return res.json({ message: "Meal added to favorites" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

var UpdateUserProfileData = async (req, res) => {
  try {
    console.log("-------UpdateUserProfileData--------");
    var updatedUser = req.body;

    await usersmodel.updateOne(
      { _id: updatedUser.id },
      {
        fname: updatedUser.fname,
        lname: updatedUser.lname,
        email: updatedUser.email,
        mobile: updatedUser.mobile,
        address: updatedUser.address,
        gender: updatedUser.gender,
        age: updatedUser.age,
      }
    );
    await res.send(updatedUser);
  } catch (e) {
    console.log(e);
    res.status(400).send("*******failed to update new user**********");
  }
};
module.exports = {
  GetAllUsers,
  GetUserByID,
  UpdateUserByID,
  DeleteUserByID,
  getLatest8users,
  UploadProfilePic,
  UpdateUserProfileData,
  upload,
  uploadsCloud,
  addMealToFavorites,
};
