const express = require("express");
const router = express.Router();
const customerController = require("./customerController");
const {verifyToken} = require("../middleware/authentication");

// protected routes
router.post("/new", verifyToken, customerController.addCustomer);
router.post("/search",verifyToken,customerController.searchCustomer)
router.get("/list",verifyToken,customerController.listCustomers)

module.exports = router;