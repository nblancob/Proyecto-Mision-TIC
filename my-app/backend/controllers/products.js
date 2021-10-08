const Producto = require("../models/productos");
console.log("is here");

exports.getProducts = (req, res) => {
  Producto.find().then((postResult) => {
    res.status(200).json(postResult);
  });
};

exports.addProducts = (req, res) => {
  const productAdd = new Producto({
    description: req.body.description,
    price: req.body.price,
    state: req.body.state,
  });
  productAdd.save().then((createdProduct) => {
    console.log(createdProduct);
    res.status(201).json("creado satisfactoriamente");
  });
};

exports.getProductId = (req, res) => {
  Producto.findById(req.params.id).then((productResult) => {
    if (productResult) {
      res.status(201).json(productResult);
    } else {
      res.status(404).json("la id:" + req.params.id + " no se encontro");
    }
  });
};
