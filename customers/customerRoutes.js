const express = require("express");
const router = express.Router();
const customerController = require("./customerController");
const {verifyToken} = require("../middleware/authentication");

// protected routes
//Mikkel1 ok nice, but I see verifyToken passed to all the posts. Is there a way to, through a function,
//to make this shorter ? Perhaps a "postSetup" or similar, that will automatically insert the verify token.
//that way, if we need another way of verifrying the token, it will only have to be changed one place.
router.post("/new", verifyToken, customerController.addCustomer);
router.post("/search",verifyToken,customerController.searchCustomer)
router.get("/list",verifyToken,customerController.listCustomers)

module.exports = router;