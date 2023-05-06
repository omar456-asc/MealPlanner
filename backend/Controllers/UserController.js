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
var AddNewUser = async(req,res)=>{
    /// console.log('success');
    try{
         const { fname, lname, email, password } = req.body;
         var usersModelCreate = await usersmodel.create({
             fname, lname, email, password
         }) 
         res.json(usersModelCreate);
     }catch(e){
         console.log('failed to add new user');
     }  
 }
var DeleteUserByID = async(req,res)=>{
    var ID = req.params.id;
    await usersmodel.findByIdAndDelete(ID);
    res.send("Deleted Successfully");
}

module.exports = {
    GetAllUsers,
    GetUserByID,
    UpdateUserByID,
    AddNewUser,
    DeleteUserByID
  }