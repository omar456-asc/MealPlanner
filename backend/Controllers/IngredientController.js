let IngredientModel = require("../Models/IngredientModel");

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

// Create a new ingredient
const createIngredient = async (req, res) => {
  try {
    const ingredient = new IngredientModel(req.body);
    await ingredient.save();
    res.status(201).json({ message: "Ingredient created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
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
};
