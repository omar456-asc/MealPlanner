const stripeController = require("../Controllers/StripeController");
const authuserMiddleware = require("../MiddleWares/authuserMiddleware");
const express = require("express");
let router = express.Router();

//#region Product
router.post("/", authuserMiddleware, stripeController.payment);
module.exports = router;
