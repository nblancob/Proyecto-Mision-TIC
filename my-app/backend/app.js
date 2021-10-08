var express = require("express");
var app = express();
var mongoose = require("mongoose");
const productsRoute = require("./routes/products");
const salesRoute = require("./routes/sales");
const usersRoute = require("./routes/users");
const URI ="mongodb+srv://nblancob:1899Nic%40@cluster0.mzqw4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const cors = require("cors");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productsRoute);
app.use("/api/sales", salesRoute);
app.use("/api/users", usersRoute);
app.use(express.static("./public"));
app.use(cors());
//Database
mongoose
  .connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

module.exports = app;
