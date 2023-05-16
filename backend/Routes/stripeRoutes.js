const express = require("express");
let router = express.Router();
const stripeController = require("../Controllers/StripeController");

//#region Product
router.post("/payment", stripeController.payment);
module.exports = router;