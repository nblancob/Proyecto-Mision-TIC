
const mongoose = require('mongoose');
const Users = mongoose.schema({
    Id_User: {type:String, required:true},
    Nombre: {type:String, required:true},
    Rol: {type:String, required:true},
    Estado: {type:String, required:true},
});
module.exports = mongoose.model("Users",Users)