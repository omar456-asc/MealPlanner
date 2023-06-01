const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");
let IngredientModel = require("../Models/IngredientModel");

dotenv.config();


// Get all ingredients
const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await IngredientModel.find();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get ingredient by id
const getIngredientById = async (req, res) => {
  try {
    const ingredient = await IngredientModel.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }
    res.status(200).json(ingredient);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ingredient-uploads", // Specify the folder in Cloudinary where the ingredient images will be stored
    allowedFormats: ["jpg", "jpeg", "png"], // Specify the allowed image formats
    transformation: [{ width: 500, height: 500, crop: "limit" }], // Optional: Specify any image transformations you want to apply
  },
});
const upload = multer({ storage: storage }).single('image');


// Create a new ingredient
const createIngredient = async (req, res) => {
  try {

    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "Error uploading image" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }

      const { name, consistency, price } = req.body;
      let image = "";
      if(req.file){
      image = req.file.path;
      }

      const newIngredient = new IngredientModel({
        name,
        consistency,
        image,
        price,
      });

      const savedIngredient = await newIngredient.save();

      res
        .status(201)
        .json({
          message: "Ingredient created successfully",
          ingredient: savedIngredient,
        });
    });

  } catch (error) {
    console.error("Error creating ingredient:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// Update an existing ingredient
const updateIngredient = async (req, res) => {
  try {
    const ingredient = await IngredientModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }
    res.status(200).json({ message: "Ingredient updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete an ingredient
const deleteIngredient = async (req, res) => {
  try {
    const ingredient = await IngredientModel.findByIdAndDelete(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }
    res.status(200).json({ message: "Ingredient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllIngredients,
  getIngredientById,
  createIngredient,
  updateIngredient,
  deleteIngredient,
  upload,
};
