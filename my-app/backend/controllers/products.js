const Producto = require("../models/productos");

exports.getProducts = (req, res) => {
  Producto.find().then((postResult) => {
    res.status(200).json(postResult);
  });
};
exports.addProducts = (req, res) => {
  const productAdd = new Producto({
    id_producto: req.body.id_producto,
    description: req.body.description,
    price: req.body.price,
    state: req.body.state,
  });
  productAdd
    .save()
    .then((createdProduct) => {
      res.status(201).json("creado satisfactoriamente");
    })
    .catch((error) => {
      res.status(500).json("No se pudo agregar el producto debido a que la id ya existe");
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
  Producto.deleteOne({ _id: id }).then((productResult) => {
    res.status(200).json("El producto se elemino correctamente");
  });
};
exports.editProduct = (req, res) => {
  const id = req.params.id;
  const productUpd = new Producto({
    _id: id,
    id_producto: req.body.id_producto,
    description: req.body.description,
    price: req.body.price,
    state: req.body.state,
  });
  Producto.findByIdAndUpdate(id, productUpd)
    .then((productoResult) => {
      res.status(200).json("El producto se actualizó satisfactoriamente");
    })
    .catch((error) => {
      res
        .status(500)
        .json("No se pudo actualizar el producto debido a que la id ya existe");
    });
};
