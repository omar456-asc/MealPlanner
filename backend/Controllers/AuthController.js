let usersmodel = require("../Models/usersModel");
const jwt = require('jsonwebtoken')

//#region Errors
const handleErrors =(e) => {  
    console.log(e.message);
    var errors = { email: '', password: ''};
//#region incorrect email
if(e.message=='incorrect email please try again'){
    errors.email = 'that email is not registered';
}

//#endregion
//#region incorrect email
if(e.message=='incorrect password, please try again'){
    errors.password = 'that password is incorrect';
}
//#endregion
//#region duplicateErrorCode
    if (e.code == 11000){ //Another error if email is already exists
        errors.email = 'that email is already registered';
        return errors;
    }
//#endregion

//#region validationErrors
    if(e.message.includes('Users validation failed')){ // It Divide errors into sections and types for each one
        Object.values(e.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

   return errors;
//#endregion 

}
//#endregion

//#region JWT
const maxDay = 3 * 24 *60 * 60 ;   // The days i logged in then expires
const createToken = (id) =>{
    return jwt.sign({ id }, 'meal planner secret',{
        expiresIn: maxDay
    }) ;  //id, secret 
}
//#endregion

//#region SignUp
var AddNewUser = async(req,res)=>{
    const { fname, lname, email, password } = req.body;
    try{
         const usersModelCreate = await usersmodel.create({
             fname, lname, email, password
         });
         const token = createToken(usersModelCreate._id);
         res.json({usersModelCreate: usersModelCreate._id});
    }catch(e){
        const errors = handleErrors(e);
        res.status(400).json({errors});
    }  
}
//#endregion

//#region LogIn
var logIn = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await usersmodel.login(email, password);
        const token = createToken(user._id);
        res.cookie('token', token,{maxAge:maxDay*1000})
        res.status(200)
        res.json({user: user._id});
    }
    catch(e){
        var Errors=handleErrors(e);
        res.status(400);
        console.log(Errors);
        res.json({Errors});
    }
}
//#endregion
var logout= async(req,res)=>{ //Delete JWT cookie
    res.cookie('token', '', {maxAge : 1})
    res.redirect('/');
}
//#region logout

//#end region

module.exports = {
    AddNewUser,
    logIn,
    logout
  }