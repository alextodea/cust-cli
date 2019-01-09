exports.addCustomer = (req,res) => {
    console.log(req.body);
    res.status(200).json({message: "Customer added succesfully!"});
};