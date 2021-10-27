const mongoose = require("mongoose");

const ventasModel = mongoose.Schema(
  {
    Fecha: { type: Date, required: true },
    Valor: { type: Number, required: true },
    Estado: { type: String, required: true },
  },
  { collection: "Ventas" }
);

module.exports = mongoose.model("Ventas", ventasModel);
