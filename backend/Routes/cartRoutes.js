const express = require("express");
let router = express.Router();
const CartController = require("../Controllers/CartController");
const authuserMiddleware = require("../MiddleWares/authuserMiddleware");
//#region AddToCart
router.post("/:id", authuserMiddleware, CartController.AddToCart);
router.get("/:id", authuserMiddleware, CartController.GetCart);
//#endregion
module.exports = router;
