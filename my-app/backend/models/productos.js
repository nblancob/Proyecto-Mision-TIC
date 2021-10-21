const mongoose = require("mongoose");

const producto = mongoose.Schema({
  id_producto: { type: Number},
  description: { type: String, required: true },
  price: { type: Number, required: true },
  state: { type: Boolean, required: true },
});

module.exports = mongoose.model("Producto", producto);
