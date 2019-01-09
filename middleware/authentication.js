const fs = require("fs");
const tokenFilePath = "tokenStorage.json";

exports.addTokenStatus = (res,tokenStatusBoolean) => {
    const token = JSON.stringify({token:tokenStatusBoolean});
    fs.writeFile(tokenFilePath,token,"utf8",err=>{
        if (err) return res.status(404).json({message: "Auth failed."});
     });
};

exports.verifyToken = (req,res,next) => {
    fs.readFile(tokenFilePath,(err,data) =>{
        const tokenObj = JSON.parse(data);
        (tokenObj.token) ? next() : res.status(403).json({message: "Forbidden"});
    });
};