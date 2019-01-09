const Customer = require("./models/customerSchema");

exports.addCustomer = async (req,res) => {

    const query = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };

    const customerInDb = await Customer.findOne(query)

    // check if customer already exists in db
    if (customerInDb) return res.status(404).json({message: "Customer already exists in database. Please add different credentials."});
    
    await Customer.create(req.body);
    res.status(200).json({message: "Customer added succesfully!"});
};

exports.searchCustomer = async (req,res) => {
    const insensitiveName = new RegExp(req.body.name,"i");
    arrOfCustomerObjects = await Customer.find({name:insensitiveName})
    const customers = iterateThrough(arrOfCustomerObjects)
    res.status(200).json({message: customers});
};

exports.listCustomers = async (req,res) => {
    const arrOfCustomerObjects = await Customer.find();
    const customers = await iterateThrough(arrOfCustomerObjects);
    res.status(200).json({message: customers});
};

// iterate through array of cust objects and map the credentials
const iterateThrough = (arrOfCustomerObjects) => {
    return arrOfCustomerObjects.map(customer => customer.name + " " + customer.email + " " + customer.phone);    
}