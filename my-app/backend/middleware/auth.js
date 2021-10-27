const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.decode(token);
  req.userData = { Correo: decodedToken.email, Nombre: decodedToken.name };
  console.log(res.header);
  next();
};
