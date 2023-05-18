const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/OrderController");

router.get("/", OrderController.getAllOrders);
router.post("/", OrderController.createOrder);
router.get("/:id", OrderController.getOrderById);
router.put("/:id", OrderController.updateOrder);
router.delete("/:id", OrderController.deleteOrder);


module.exports = router;
