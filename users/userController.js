const User = require("./models/userSchema");
const bcrypt = require("bcryptjs");
const {addTokenStatus} = require("../middleware/authentication");

const register = async (req,res) => {

    const query = {username:req.body.username};
    const userInDb = await User.findOne(query)

    // check if user already exists in db
    //Mikkel 1: this should also be shorter
    if (userInDb) return res.status(404).json({message: "User already exists in database. Please log in"});
    
    req.body.password = await bcrypt.hash(req.body.password,10);
    const registeredUser = await User.create(req.body);
    //MIKKEL1 any way to make this statement shorter ? as it is now it would have to be copy/pasted into
    // every rest method. Perhaps use a function (ok(message)) or something to handle this.
    res.status(200).json({message: "You have succesfully created a new account "+registeredUser.username+"! You can log in now."});
};

const login = async (req,res) => {
    //Mikkel 1: Im not sure queries directly in the rest method is a good idea. Perhaps make functions that handle only database calls ?
    //As it is now, those queries cannot be used outside anything rest without creating them once more.

    const query = {username:req.body.username};
    const userInDb = await User.findOne(query);

    // check if user does NOT exist in db
    if (!userInDb) return res.status(404).json({message: "Username/Password incorrect."});

    // compare password with hash
    const passwordsMatch = await bcrypt.compare(req.body.password,userInDb.password);
    if (!passwordsMatch) {return res.status(404).json({message: "Username/Password incorrect."});}

    addTokenStatus(res,true);
    res.status(200).json({message: "Welcome " + req.body.username + "! You are now logged in!"});
};

const logout = (req,res) => {
    addTokenStatus(res,false);
};
 
module.exports = {
    register,
    login,
    logout
};