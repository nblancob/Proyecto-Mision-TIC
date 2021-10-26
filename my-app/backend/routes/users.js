var express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");
const auth = require("../middleware/auth");

router.get("", auth, UserController.getByemail);
router.get("/getid/:id", UserController.getUserId);
router.get("/list", UserController.getUsers);
router.get("/validate", auth, UserController.validateAdm);
router.put("/:id", UserController.editUsers);
router.delete("/:id", UserController.delete);
module.exports = router;
