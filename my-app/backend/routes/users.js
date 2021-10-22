var express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");

router.get("",UserController.getUsers);
router.get("",UserController.getOneUsersbymail);
router.post("",UserController.addUsers);
router.post("",UserController.updateOneUsers);
router.delete("",UserController.removeUsers);
module.exports = router;