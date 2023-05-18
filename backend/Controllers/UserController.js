let usersmodel = require("../Models/usersModel");
const bcrybt = require("bcrypt");
const multer = require("multer");
var path = require("path");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

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

var GetAllUsers = async (req, res) => {
  try {
    var AllUsers = await usersmodel.find();
    await res.json(AllUsers);
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to get all users");
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

var UpdateUserByID = async (req, res) => {
  try {
    var ID = req.params.id;
    var updatedUser = req.body;
    const salt = await bcrybt.genSalt();
    let newpassword;
    if (updatedUser.password) {
      newpassword = await bcrybt.hash(updatedUser.password, salt);
    }
    await usersmodel.updateOne(
      { _id: ID },
      {
        cart: updatedUser.cart,
        fname: updatedUser.fname,
        lname: updatedUser.lname,
        password: newpassword,
      }
    );
    await res.send(updatedUser);
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to update new user");
  }
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
    console.log(AllUsers);
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

module.exports = {
  GetAllUsers,
  GetUserByID,
  UpdateUserByID,
  DeleteUserByID,

  getLatest8users,
  UploadProfilePic,
  upload,
  uploadsCloud,
};
