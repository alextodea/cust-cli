const mongoose = require("mongoose");
const { databaseUrl } = require("./config");

// database options are set in order to avoid deprecation warnings
const databaseOptions = { 
    useCreateIndex: true,
    useNewUrlParser: true
};

mongoose.connect(databaseUrl,databaseOptions);
mongoose.Promise = global.Promise;

const dbConnection = mongoose.connection;
dbConnection.on("error", console.error.bind(console, "MongoDB connection error:"));