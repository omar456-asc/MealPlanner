const express = require("express");
let router = express.Router();
// const OrderController = require("../controllers/OrderController");
const OrderController = require("../Controllers/OrderController");
//#region get order by user id

router.get("/:id", OrderController.getOrdersByUserId);
//#endregion

module.exports = router;
