var express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");
const auth = require("../middleware/auth");

router.get("", auth, UserController.getByemail);
router.get("", UserController.getUsers);
router.get("/validate", auth, UserController.validateAdm);
// router.post("", UserController.addUsers);
// router.post("", UserController.updateOneUsers);
// router.delete("", UserController.removeUsers);
module.exports = router;
