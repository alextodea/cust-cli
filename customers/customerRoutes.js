const express = require("express");
const router = express.Router();
const customerController = require("./customerController");
const {verifyToken} = require("../middleware/authentication");
//Mikkel 2
//Proposal to get rid of verifyToken
const post = (path, controller) => router.post(path, verifyToken, controller);
const get = (path, controller) => router.get(path, verifyToken, controller);

// protected routes
post("/new", customerController.addCustomer);
post("/search", customerController.searchCustomer)
get("/list", customerController.listCustomers)

module.exports = router;