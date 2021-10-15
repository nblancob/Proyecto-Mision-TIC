var express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");

router.get("",UserController.getUsers);
router.post("",UserController.addUsers);
router.delete("",UserController.removeUsers);
module.exports = router;