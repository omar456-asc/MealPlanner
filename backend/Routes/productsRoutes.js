const ProductController = require("../Controllers/ProductController");
const RatingController = require("../Controllers/RatingController");
const express = require("express");
let router = express.Router();

//#region Product
router.get("/latest6products", ProductController.getLatest6products);

router.get("/", ProductController.GetAllProducts);
router.get("/:id", ProductController.GetProductByID);
router.get("/search/:key", ProductController.SearchMeal);

router.post("/:id",RatingController.addNewRate);
router.delete("/:id", ProductController.DeleteProductByID);
router.post("/", ProductController.addNewProduct);
router.put("/:id", ProductController.editProduct);
//#endregion

module.exports = router;
