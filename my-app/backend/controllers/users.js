const Users = require("../models/users");

exports.getUsers=(req,res)=>{
    Users.find().then((postResult)=>{  
    res.status(200).json(postResult); 
    })    }

    exports.addUsers=(req,res)=>{
        Users.post().then((postResult)=>{  
        res.status(200).json(postResult); 
        })    }
    
        exports.removeUsers=(req,res)=>{
            Users.delete().then((postResult)=>{  
            res.status(200).json(postResult); 
            })    }