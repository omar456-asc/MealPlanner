const express = require("express");
let router = express.Router();
const CartController = require("../Controllers/CartController");
//#region AddToCart
router.post("/:id",CartController.AddToCart);
router.get("/:id",CartController.GetCart)
//#endregion
module.exports = router;