var express = require("express");
const router = express.Router();
const salesController = require("../controllers/sales")
var cors = require('cors')
router.use(cors())
router.get("/1",salesController.getProducts);
//router.post("",salesController.addProducts);
router.get("/:id",salesController.getProductId)
router.get("/fecha/:fecha",salesController.getVentasFecha)
//router.delete("");
module.exports = router;
