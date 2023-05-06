let usersmodel = require("../Models/usersModel");

var GetAllUsers = async(req,res)=>{
    try{
        var AllUsers = await usersmodel.find();
        await res.json(AllUsers);
    }catch(e){
        console.log(e);
        res.status(400).send('failed to get all users');
    }
}

var GetUserByID = async(req,res)=>{
    try{
        var ID = req.params.id;
        res.json(await usersmodel.findById(ID));
    }catch(e){
        console.log(e);
        res.status(400).send('failed to get user');
    }
}

var UpdateUserByID = async(req, res)=>{
    try{
        var ID = req.params.id;
        var updatedUser = req.body;
        await usersmodel.updateOne({_id:ID},{"fname":updatedUser.fname,"lname":updatedUser.lname,"password":updatedUser.password});
        await res.send(updatedUser);
    }catch(e){
        console.log(e);
        res.status(400).send('failed to update new user');
    }
}

var DeleteUserByID = async(req,res)=>{
    try{
        var ID = req.params.id;
        await usersmodel.findByIdAndDelete(ID);
        res.send("Deleted Successfully");
    }catch(e){
        console.log(e);
        res.status(400).send('failed to delete user');
    }
}

module.exports = {
    GetAllUsers,
    GetUserByID,
    UpdateUserByID,
    DeleteUserByID
  }