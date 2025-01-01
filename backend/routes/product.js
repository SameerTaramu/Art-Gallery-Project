// const express = require("express");
// const Product = require("../models/product.model");
// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// router.post("/", async (req, res) => {
//   const { name, image, description, price, category } = req.body;

//   try {
//     const newProduct = new Product({ name, image, description, price, category });
//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
