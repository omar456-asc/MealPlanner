const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");


let DB_URL = process.env.MONGO_URI;

if (mongoose.connect(DB_URL, { useNewUrlParser: true })) {
  console.log("Connected to database");
}
var ProductsSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 50 },
  summary: { type: String, required: true, minlength: 3, maxlength: 50 },
  // summary: {
  //   type: String,
  //   required: [true, "Please enter an product"],
  // },
});

module.exports = mongoose.model("meals", ProductsSchema);
