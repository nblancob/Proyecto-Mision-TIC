const mongoose = require("mongoose");

const producto = mongoose.Schema({
  description: { type: String, required: true },
  price: { type: Number, required: true },
  state: { type: Boolean, required: true },
});

module.exports = mongoose.model("Producto", producto);
