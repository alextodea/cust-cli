const express = require("express");
const app = express();
const dbConnection = require("./databaseConnection");
const bodyParser = require('body-parser');
const userRoutes = require("./users/userRoutes");
const customerRoutes = require("./customers/customerRoutes");

// parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user",userRoutes);
app.use("/customer",customerRoutes);

module.exports = app;