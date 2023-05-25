const OrderController = require("../Controllers/OrderController");
const authuserMiddleware = require("../MiddleWares/authuserMiddleware");
const express = require("express");
const router = express.Router();

router.get("/", authuserMiddleware, OrderController.getAllOrders);
router.post("/", authuserMiddleware, OrderController.createOrder);
router.get("/:id", authuserMiddleware, OrderController.getOrderById);
router.put("/:id", authuserMiddleware, OrderController.updateOrderStatus);
// router.delete("/:id", authuserMiddleware, OrderController.deleteOrder);

module.exports = router;
