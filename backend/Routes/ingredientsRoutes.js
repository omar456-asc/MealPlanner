const express = require("express");
const router = express.Router();

const IngredientController = require("../Controllers/IngredientController");

router.get("/", IngredientController.getAllIngredients);
router.post("/", IngredientController.createIngredient);
router.get("/:id", IngredientController.getIngredientById);
router.put("/:id", IngredientController.updateIngredient);
router.delete("/:id", IngredientController.deleteIngredient);

module.exports = router;
