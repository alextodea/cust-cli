const User = require("./models/userSchema");
const bcrypt = require("bcryptjs");
const {addTokenStatus} = require("../middleware/authentication");

const register = async (req,res) => {

    const query = {username:req.body.username};
    const userInDb = await User.findOne(query)

    // check if user already exists in db
    if (userInDb) return res.status(404).json({message: "User already exists in database. Please log in"});
    
    req.body.password = await bcrypt.hash(req.body.password,10);
    const registeredUser = await User.create(req.body);
    
    res.status(200).json({message: "You have succesfully created a new account "+registeredUser.username+"! You can log in now."});
};

const login = async (req,res) => {
  
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