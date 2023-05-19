const ProductController = require("../Controllers/ProductController");
const authuserMiddleware = require("../MiddleWares/authuserMiddleware");
const express = require("express");
let router = express.Router();

//#region Product
router.get(
  "/latest6products",
  authuserMiddleware,
  ProductController.getLatest6products
);

router.get("/", authuserMiddleware, ProductController.GetAllProducts);
router.get("/:id", authuserMiddleware, ProductController.GetProductByID);
// router.post("/:id",ProductController.UpdateProductByID);
router.delete("/:id", authuserMiddleware, ProductController.DeleteProductByID);
router.post("/", authuserMiddleware, ProductController.addNewProduct);
router.put("/:id", authuserMiddleware, ProductController.editProduct);
//#endregion

module.exports = router;
