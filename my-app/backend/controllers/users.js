const Users = require("../models/users");

// consultar todos los usuarios
exports.getUsers = (req, res) => {
  Users.find().then((getResult) => {
    res.status(200).json(getResult);
  });
};

// Actualizar un usuario
// exports.updateOneUsers = (req, res) => {
//   Users.findOne({ Id_User: req.body.Id_User }).then((findOne) => {
//     if (findOne) {
//       const updateUser = new Users({
//         Id_User: req.body.Id_User,
//         Nombre: req.body.Nombre,
//         Correo: req.body.Correo,
//         Rol: req.body.Rol,
//         Estado: req.body.Estado,
//       });
//       Users.findByIdAndUpdate({ Id_User: req.body.Id_User }, updateUser).then(
//         (productoResult) => {
//           res.status(200).json("Usuario Actualizado");
//         }
//       );
//     } else {
//       res.status(401).json("Usuario No Encontrado");
//     }
//   });
// };

// Añadir un usuario nuevo
// exports.addUsers = (req, res) => {
//   Users.findOne({ Nombre: req.body.Nombre }).then((findOne) => {
//     if (findOne) {
//       res.status(200).json("Usuario ya existe");
//     } else {
//       const addUser = new Users({
//         Id_User: req.body.Id_User,
//         Nombre: req.body.Nombre,
//         Correo: req.body.Correo,
//         Rol: req.body.Rol,
//         Estado: false,
//       });
//       addUser.save().then((UserAdded) => {
//         res.status(200).json("Usuario Creado");
//       });
//     }
//   });
// };
// Borrar Usuario por Nombre
// exports.removeUsers = (req, res) => {
//   Users.findOne({ Nombre: req.body.Nombre }).then((findOne) => {
//     if (findOne) {
//       Users.deleteOne({ Nombre: req.body.Nombre }).then((UserRemoved) => {
//         res.status(200).json("Usuario Borrado");
//       });
//     } else {
//       res.status(401).json("Usuario No Existe");
//     }
//   });
// };
// Buscar Usuario por correo
exports.getByemail = (req, res) => {
  Users.findOne({ Correo: req.userData.Correo }).then((Userfind) => {
    if (Userfind) {
      if (Userfind.Estado) {
        res.status(200).json("activo");
      } else {
        res.status(200).json("inactivo");
      }
    } else {
      const newUser = new Users({
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
  Users.findOne({ Correo: req.userData.Correo }).then((Userfind) => {
    res.status(200).json(Userfind.Rol);
  });
};
