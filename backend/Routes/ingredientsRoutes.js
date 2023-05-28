const express = require("express");
const router = express.Router();

const IngredientController = require("../Controllers/IngredientController");
const authuserMiddleware = require("../MiddleWares/authuserMiddleware");

router.get("/", authuserMiddleware, IngredientController.getAllIngredients);
router.post("/", authuserMiddleware, IngredientController.createIngredient);
router.get("/:id", authuserMiddleware, IngredientController.getIngredientById);
router.put("/:id", authuserMiddleware, IngredientController.updateIngredient);
router.delete(
  "/:id",
  authuserMiddleware,
  IngredientController.deleteIngredient
);

module.exports = router;
