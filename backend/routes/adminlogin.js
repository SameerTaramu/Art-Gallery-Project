// const express = require('express');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user.js'); 
// const router = express.Router();

// const JWT_SECRET = 'your_jwt_secret';
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ status: 'error', message: 'Username and password are required' });
//   }

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(404).json({ status: 'error', message: 'User not found' });
//     }
//     if (user.password !== password) {
//       return res.status(400).json({ status: 'error', message: 'Invalid credentials' });
//     }
//     if (user.isAdmin) {
//       const token = jwt.sign({ id: user._id, isAdmin: true }, JWT_SECRET, { expiresIn: '1h' });
//       return res.status(200).json({
//         status: 'success',
//         message: 'Login successful',
//         token,
//         redirectUrl: 'http://127.0.0.1:5500/frontend/panel.html' 
//       });
//     }

//     return res.status(403).json({ status: 'error', message: 'Admin access required' });
//   } catch (err) {
//     res.status(500).json({ status: 'error', message: err.message });
//   }
// });

// module.exports = router;
