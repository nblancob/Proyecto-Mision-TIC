var express = require("express");
const router = express.Router();
const ProductController = require("../controllers/products")

router.get("",ProductController.getProducts);
router.post("",ProductController.addProducts);
router.get("/:id",ProductController.getProductId)
router.delete("");
module.exports = router;
