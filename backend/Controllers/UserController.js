let usersmodel = require("../Models/usersModel");
const bcrybt = require("bcrypt");

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

module.exports = {
  GetAllUsers,
  GetUserByID,
  UpdateUserByID,
  DeleteUserByID,

  getLatest8users,
};
