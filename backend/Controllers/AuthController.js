let usersmodel = require("../Models/usersModel");

//#region Errors
const handleErrors =(e) => {  
    console.log(e.message, e.code);
    let errors = {fname: '', lname: '', email: '', password: ''};

//#region duplicateErrorCode
    if (e.code === 11000){ //Another error if email is already exists
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

//#region SignUp
var AddNewUser = async(req,res)=>{
    const { fname, lname, email, password } = req.body;
    try{
         const usersModelCreate = await usersmodel.create({
             fname, lname, email, password
         });
         res.json(usersModelCreate);
    }catch(e){
        const errors = handleErrors(e);
        res.status(400).json({errors});
    }  
}
//#endregion

//#region LogIn

//#endregion

module.exports = {
    AddNewUser,
  }