const Users = require("../models/users");

// consultar todos los usuarios
exports.getUsers = (req, res) => {
  Users.find().then((getResult) => {
    res.status(200).json(getResult);
  });
};

// Actualizar un usuario
exports.updateOneUsers = (req, res) => {
  Users.findOne({ Id_User: req.body.id_User }).then((findOne) => {
    if (findOne) {
      const updateUser = new Users({
        id_User: req.body.id_User,
        nombre: req.body.nombre,
        correo: req.body.correo,
        rol: req.body.rol,
        estado: req.body.estado,
      });
      Users.findByIdAndUpdate({ id_User: req.body.id_User }, updateUser).then(
        (productoResult) => {
          res.status(200).json("Usuario Actualizado");
        }
      );
    } else {
      res.status(401).json("Usuario No Encontrado");
    }
  });
};

// Añadir un usuario nuevo
exports.addUsers = (req, res) => {
  Users.findOne({ nombre: req.body.nombre }).then((findOne) => {
    if (findOne) {
      res.status(200).json("Usuario ya existe");
    } else {
      const addUser = new Users({
        id_User: req.body.id_User,
        nombre: req.body.nombre,
        correo: req.body.correo,
        rol: req.body.rol,
        estado: false,
      });
      addUser.save().then((UserAdded) => {
        res.status(200).json("Usuario Creado");
      });
    }
  });
};
// Borrar Usuario por Nombre
exports.removeUsers = (req, res) => {
  Users.findOne({ nombre: req.body.nombre }).then((findOne) => {
    if (findOne) {
      Users.deleteOne({ nombre: req.body.nombre }).then((UserRemoved) => {
        res.status(200).json("Usuario Borrado");
      });
    } else {
      res.status(401).json("Usuario No Existe");
    }
  });
};
