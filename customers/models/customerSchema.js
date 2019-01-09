const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    firstName: { type: String, unique: true, required: true },
    lastName: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now }
});

const Customer = mongoose.model("Customer",CustomerSchema);

module.exports = Customer;