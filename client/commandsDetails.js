const clientController = require("./clientController");

const userRegisterData = {
    command: "register <username> <password>" ,
    alias: "r",
    description: "Register a new user",
    action: clientController.postUserRegisterData
};

const userLoginData = {
    command: "login <username> <password>",
    alias: "l",
    description: "Log in a new user",
    action: clientController.postUserLoginData
};

const addNewCustData = {
    command: "new <firstname> <lastname> <email> <phone",
    alias: "n",
    description: "Add new customer",
    action: clientController.postNewCustomerData
};

const listCustData = {
    command: "list",
    alias: "li",
    description: "List all customers",
    action: ""
};

const searchCustData = {
    command: "search <name>",
    alias: "s",
    description: "Search customer",
    action: ""
};

module.exports = {
    userRegisterData,
    userLoginData,
    addNewCustData,
    listCustData,
    searchCustData
};