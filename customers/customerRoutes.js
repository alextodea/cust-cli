const express = require("express");
const router = express.Router();
const customerController = require("./customerController");

router.post("/new", customerController.addCustomer);

module.exports = router;