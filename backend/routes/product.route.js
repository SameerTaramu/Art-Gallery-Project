const express = require('express');
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js')
router.post("/delete/:id",deleteProduct);
router.get('/all', getProducts);
router.get("/:id",getProduct);
router.post("/", createProduct);
router.put("/:id",updateProduct);
module.exports = router;

