const mongoose = require("mongoose");

const salesManagment = mongoose.Schema({
    id_product: { type: Number, required: true },
    seller: { type: String, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
});

module.exports = mongoose.model("salesManagment",salesManagment);