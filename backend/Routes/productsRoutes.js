const express = require("express");
let router = express.Router();
const ProductController = require("../Controllers/ProductController");

//#region Product
router.get("/", ProductController.GetAllProducts);
router.get("/:id",ProductController.GetProductByID);
// router.post("/:id",ProductController.UpdateProductByID);
router.delete("/:id",ProductController.DeleteProductByID);
router.post("/", ProductController.addNewProduct);
router.put('/:id',ProductController.editProduct);
//#endregion

module.exports = router;