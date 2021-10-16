var express = require("express");
const router = express.Router();
const ProductController = require("../controllers/products");

router.get("", ProductController.getProducts);
router.post("", ProductController.addProducts);
router.get("/:id", ProductController.getProductId);
router.delete("/:id", ProductController.deleteProduct);
router.put("/:id", ProductController.editProduct);
module.exports = router;
