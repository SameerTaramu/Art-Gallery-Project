const Cart = require('../models/usercart');

exports.addToCart = async (req, res) => {
    try {
        const { userId, productId, name, price, image } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [], totalPrice: 0 });
        }

        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += 1; 
        } else {
            cart.items.push({ productId, name, price, image, quantity: 1 });
        }

        cart.totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

        await cart.save();

        res.status(200).json({ message: 'Item added to cart', cart });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getCart = async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.findOne({ userId }).populate('items.productId');

        if (!cart) return res.status(404).json({ message: 'Cart is empty' });

        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.deleteFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

        if (itemIndex > -1) {
            cart.items.splice(itemIndex, 1);

            cart.totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

            await cart.save();

            res.status(200).json({ message: 'Item removed from cart', cart });
        } else {
            res.status(404).json({ message: 'Item not found in cart' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};