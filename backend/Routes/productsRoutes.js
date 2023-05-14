const express = require("express");
let router = express.Router();

const ProductController = require("../Controllers/ProductController");

//#region Product
router.get("/latest6products", ProductController.getLatest6products);


router.get("/", ProductController.GetAllProducts);
router.get("/:id",ProductController.GetProductByID);
// router.post("/:id",ProductController.UpdateProductByID);
router.delete("/:id",ProductController.DeleteProductByID);
//#endregion

module.exports = router;
