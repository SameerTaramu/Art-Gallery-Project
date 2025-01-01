// const express = require('express');
// const Art = require('../models/product.model');
// const User = require('../models/user');
// // const Review = require('../models/Review');
// // const Order = require('../models/Order');

// const router = express.Router();
// router.get('/products', async (req, res) => {
//   try {
//     const artPieces = await Art.find();
//     res.status(200).json(artPieces);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch art pieces' });
//   }
// });

// router.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// });

// router.get('/reviews', async (req, res) => {
//   try {
//     const reviews = await Review.find().populate('product user', 'title name');
//     res.status(200).json(reviews);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch reviews' });
//   }
// });

// router.get('/orders', async (req, res) => {
//   try {
//     const orders = await Order.find().populate('user', 'name');
//     res.status(200).json(orders);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch orders' });
//   }
// });

// router.delete('/products/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedArt = await Art.findByIdAndDelete(id);
//     if (!deletedArt) return res.status(404).json({ error: 'Art piece not found' });
//     res.status(200).json({ message: 'Art piece deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete art piece' });
//   }
// });

// router.delete('/users/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedUser = await User.findByIdAndDelete(id);
//     if (!deletedUser) return res.status(404).json({ error: 'User not found' });
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete user' });
//   }
// });


// router.delete('/reviews/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedReview = await Review.findByIdAndDelete(id);
//     if (!deletedReview) return res.status(404).json({ error: 'Review not found' });
//     res.status(200).json({ message: 'Review deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete review' });
//   }
// });

// router.put('/orders/:id', async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;
//   try {
//     const updatedOrder = await Order.findByIdAndUpdate(id, { status }, { new: true });
//     if (!updatedOrder) return res.status(404).json({ error: 'Order not found' });
//     res.status(200).json(updatedOrder);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to update order status' });
//   }
// });

// module.exports = router;
