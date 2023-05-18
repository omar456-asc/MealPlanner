const stripeController = require("../Controllers/StripeController");
const express = require("express");
let router = express.Router();

//#region Product
router.post("/", stripeController.payment);
module.exports = router;
