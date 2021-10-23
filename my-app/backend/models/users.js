const mongoose = require("mongoose");
const Users = mongoose.Schema({
  Id_User: { type: Number, unique: true },
  Nombre: { type: String, required: true },
  Correo: { type: String, required: true },
  Rol: { type: String, required: true },
  Estado: { type: Boolean, required: true },
});
module.exports = mongoose.model("Users", Users);
