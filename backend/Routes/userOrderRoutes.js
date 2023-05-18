const express = require("express");
let router = express.Router();
const OrderController = require("../controllers/OrderController");
//#region get order by user id

router.get("/:id", OrderController.getOrdersByUserId);
//#endregion

module.exports = router;
