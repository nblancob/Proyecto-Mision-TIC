const users = require("../models/users");

// consultar todos los usuarios
exports.getUsers = (req, res) => {
  users.find().then((getResult) => {
    res.status(200).json(getResult);
  });
};

// Actualizar un usuario
exports.editUsers = (req, res) => {
  const id = req.params.id;
  const usersUpd = new users({
    _id: id,
    Id_User: req.body.Id_User,
    Nombre: req.body.Nombre,
    Correo: req.body.Correo,
    Rol: req.body.Rol,
    Estado: req.body.Estado,
  });
  users
    .findByIdAndUpdate(id, usersUpd)
    .then((productoResult) => {
      res.status(200).json("El usuario se actualizó satisfactoriamente");
    })
    .catch((error) => {
      res.status(500).json("No se pudo actualizar el usuario");
    });
};
// Buscar usuario por id
exports.getUserId = (req, res) => {
  users.findById(req.params.id).then((userResult) => {
    if (userResult) {
      res.status(201).json(userResult);
    } else {
      res.status(404).json("la id:" + req.params.id + " no se encontro");
    }
  });
};

// Borrar Usuario por id
exports.delete = (req, res) => {
  const id = req.params.id;
  users.deleteOne({ _id: id }).then((UserResult) => {
    res.status(200).json("El producto se elemino correctamente");
  });
};
// Buscar Usuario por correo
exports.getByemail = (req, res) => {
  users.findOne({ Correo: req.userData.Correo }).then((Userfind) => {
    if (Userfind) {
      if (Userfind.Estado) {
        res.status(200).json(Userfind);
      } else {
        res.status(200).json("inactivo");
      }
    } else {
      const newUser = new users({
        Nombre: req.userData.Nombre,
        Correo: req.userData.Correo,
        Rol: "null",
        Estado: false,
      });
      newUser.save().then((user) => {
        res.status(200).json("Usuario creado");
      });
    }
  });
};

exports.validateAdm = (req, res) => {
  users.findOne({ Correo: req.userData.Correo }).then((Userfind) => {
    res.status(200).json(Userfind.Rol);
  });
};
