const express = require("express");
const router = express.Router();
const customerController = require("./customerController");
const {verifyToken} = require("../middleware/authentication");

router.post("/new", verifyToken, customerController.addCustomer);

module.exports = router;