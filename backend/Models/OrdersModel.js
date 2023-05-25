const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
let DB_URL = process.env.MONGO_URI;

if (mongoose.connect(DB_URL, { useNewUrlParser: true })) {
  console.log("Connected to database");
}


const OrderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  meals: [
    {
      mealID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
        required: true,
      },
      ingredients: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ingredient",
          required: true,
        },
      ],
      quantity:{
        type: Number,
    required: true,
      }
    },
  ],
});

module.exports = mongoose.model("Order", OrderSchema);
