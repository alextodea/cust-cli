const fs = require("fs");
const tokenFilePath = "tokenStorage.json";

exports.addToken = (res) => {
    const token = JSON.stringify({token:true});
    fs.writeFile(tokenFilePath,token,"utf8",err=>{
        if (err) return res.status(404).json({message: "Auth failed."});
     });
};

exports.verifyToken = (req,res,next) => {
    fs.readFile(tokenFilePath,(err,data) =>{
        const tokenObj = JSON.parse(data);
        if (tokenObj.token !== true) {res.status(403).json({message: "Forbidden"});} 
    });
};

exports.removeToken = (req,res,next) => {
    
};