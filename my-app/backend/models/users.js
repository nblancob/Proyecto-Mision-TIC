const mongoose = require("mongoose");
const Users = mongoose.Schema({
  id_User: { type: Number, unique: true },
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  rol: { type: String, required: true },
  estado: { type: Boolean, required: true },
});
module.exports = mongoose.model("Users", Users);
