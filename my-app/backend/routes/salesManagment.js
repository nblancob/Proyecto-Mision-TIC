var express = require("express");
const router = express.Router();
const SalesMController = require("../controllers/salesManagment")

router.get("",SalesMController.getSales);
router.post("");

module.exports = router;
