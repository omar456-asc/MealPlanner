const mongoose = require("mongoose");
//var valid = require("validator");

var DB_URL = "mongodb+srv://mahmoud1499:Admin_123@meal-planner.bk6jdu7.mongodb.net/meal-planner"

if(mongoose.connect(DB_URL, {useNewUrlParser:true})){
    console.log("Connected to database");
}


var userSchema = new mongoose.Schema({
    fname:{type:String, required:true, minlength:3, maxlength:50},
    lname:{type:String, required:true, minlength:3, maxlength:50},
    email:{
        type:String,
        required:true, 
        // validate:{
        //     validator:(val)=>{return valid.isEmail(val)},
        //     message:"{Email} Not Valid"
        // }
    },
    password:{type:String,minlength:5,required:true}
})


module.exports = mongoose.model("Users",userSchema);