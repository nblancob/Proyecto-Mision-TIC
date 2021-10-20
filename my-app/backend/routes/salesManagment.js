var express = require("express");
const router = express.Router();
const SalesMController = require("../controllers/salesManagment")

router.get("",SalesMController.getSales);
router.post("",SalesMController.addSales);
router.get("/:id",SalesMController.getSaleId);

module.exports = router;
