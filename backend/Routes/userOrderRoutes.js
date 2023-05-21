const express = require("express");
let router = express.Router();
const OrderController = require("../Controllers/OrderController");
// const authuserMiddleware = require("../MiddleWares/authuserMiddleware");
//#region get order by user id

router.get("/:id", OrderController.getOrdersByUserId);
//#endregion

module.exports = router;
