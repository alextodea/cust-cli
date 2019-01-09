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

const userLogoutData = {
    command: "logout",
    alias: "lo",
    description: "Log out user",
    action: clientController.postUserLogoutData
};

const addNewCustData = {
    command: "new <name> <email> <phone",
    alias: "n",
    description: "Add new customer",
    action: clientController.postNewCustomerData
};

const listCustData = {
    command: "list",
    alias: "li",
    description: "List all customers",
    action: clientController.getListCustomerData
};

const searchCustData = {
    command: "search <name>",
    alias: "s",
    description: "Search customer",
    action: clientController.postSearchCustomerData
};

module.exports = {
    userRegisterData,
    userLoginData,
    userLogoutData,
    addNewCustData,
    listCustData,
    searchCustData
};