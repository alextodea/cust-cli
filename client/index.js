const program = require("commander");
const details = require("./commandsDetails");

const addCommand = (obj) => {
    program
        .command(obj.command)
        .alias(obj.alias)
        .description(obj.description)
        .action(obj.action);
};

program
    .version("1.0.0")
    .description("System for managing customers")

addCommand(details.userRegisterData); // register user
addCommand(details.userLoginData); // login user
addCommand(details.addNewCustData); // add new customer
addCommand(details.listCustData); // list customers
addCommand(details.searchCustData); // search customer

program.parse(process.argv);