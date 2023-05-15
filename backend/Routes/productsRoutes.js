const express = require("express");
let router = express.Router();
const CartController = require("../Controllers/CartController");
const ProductController = require("../Controllers/ProductController");

//#region Product
router.get("/", ProductController.GetAllProducts);
router.get("/:id",ProductController.GetProductByID);
// router.post("/:id",ProductController.UpdateProductByID);
router.delete("/:id",ProductController.DeleteProductByID);
//#endregion
//#region AddToCart
router.post("/:id",CartController.AddToCart);
router.get("/:id",CartController.GetCart)
//#endregion
module.exports = router;