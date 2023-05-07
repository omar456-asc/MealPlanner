
const mongoose = require("mongoose");
const { isEmail } = require('validator');
const bcrybt = require('bcrypt');

var DB_URL = "mongodb+srv://mahmoud1499:Admin_123@meal-planner.bk6jdu7.mongodb.net/meal-planner"

if(mongoose.connect(DB_URL, {useNewUrlParser:true})){
    console.log("Connected to database");
}

var userSchema = new mongoose.Schema({
    fname:{type:String, required:true, minlength:3, maxlength:50},
    lname:{type:String, required:true, minlength:3, maxlength:50},
    email:{
        type:String,
        required:[true, 'Please enter an email'], 
        unique:true,
        lowercase:true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password:{
        type:String,
        minlength:[6,'Minimum password length is 6 characters'],
        required:[true ,'Please enter a password']
    }
})

//#region FireAFunctionBeforeSaveToDataBaseToHash
userSchema.pre('save', async function(next){
    const salt = await bcrybt.genSalt();
    this.password= await bcrybt.hash(this.password, salt);
    next();
})
//#endregion

//static method to login
userSchema.statics.login = async function(email, password){
    const loginUser = await this.findOne({ email });
    if(loginUser){
        const checkPassword = await bcrybt.compare(password, loginUser.password);
        if(checkPassword){
            return loginUser;
        }
        throw Error("incorrect password, please try again");
    }
    throw Error("incorrect email please try again");
}

module.exports = mongoose.model("Users",userSchema);
