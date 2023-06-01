const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");


let DB_URL = process.env.MONGO_URI;

mongoose.connect(DB_URL, { useNewUrlParser: true })
const ratingSchema = new mongoose.Schema({
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'meals', required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'users',required: true },
    value: { type: Number, required: true }
  });
  
  module.exports = mongoose.model('Rating', ratingSchema);