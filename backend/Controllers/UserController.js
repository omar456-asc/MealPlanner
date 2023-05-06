let usersmodel = require("../Models/usersModel");
var GetAllUsers = async(req,res)=>{
    var AllUsers = await usersmodel.find();
    await res.json(AllUsers);
}

var GetUserByID = async(req,res)=>{
    var ID = req.params.id;
    res.json(await usersmodel.findById(ID));
}
var UpdateUserByID = async(req, res)=>{
    var ID = req.params.id;
    var updatedUser = req.body;
    await usersmodel.updateOne({_id:ID},{"fname":updatedUser.fname,"lname":updatedUser.lname,"password":updatedUser.password});
    await res.send(updatedUser);
}
module.exports = {
    GetAllUsers,
    GetUserByID,
    UpdateUserByID
    
  }