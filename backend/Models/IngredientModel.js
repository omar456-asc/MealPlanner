const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  consistency: { type: String },
  image: { type: String },
  amount: { type: Number },
  price: { type: Number },
});

module.exports = mongoose.model("ingredients", ingredientSchema);
