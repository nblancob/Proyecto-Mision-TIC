const Producto = require("../models/productos");

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

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  console.log("is here");
  Producto.deleteOne({ _id: id }).then((productResult) => {
    res.status(200).json("El producto se elemino correctamente");
  });
};
