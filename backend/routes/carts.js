// const express = require("express");
// const Cart = require("../models/usercart");
// const Product = require("../models/product.model");
// const router = express.Router();

// router.post("/:userId", async (req, res) => {
//   const { userId } = req.params;
//   const { productId, quantity } = req.body;

//   try {
//     const product = await Product.findById(productId);
//     if (!product) return res.status(404).json({ error: "Product not found" });

//     const cart = await Cart.findOne({ userId });
//     if (!cart) {
//       const newCart = new Cart({ userId, items: [{ productId, quantity }] });
//       await newCart.save();
//       return res.status(201).json(newCart);
//     }

//     const existingItem = cart.items.find(item => item.productId.toString() === productId);
//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       cart.items.push({ productId, quantity });
//     }

//     await cart.save();
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get("/:userId", async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const cart = await Cart.findOne({ userId }).populate("items.productId");
//     if (!cart) return res.status(404).json({ error: "Cart not found" });
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.delete("/:userId/:productId", async (req, res) => {
//   const { userId, productId } = req.params;

//   try {
//     const cart = await Cart.findOne({ userId });
//     if (!cart) return res.status(404).json({ error: "Cart not found" });

//     cart.items = cart.items.filter(item => item.productId.toString() !== productId);
//     await cart.save();

//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
