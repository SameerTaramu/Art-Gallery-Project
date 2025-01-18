const express = require('express');
const router = express.Router();
const Artwork = require('../models/artwork.rating');
router.post('/ratings', async (req, res) => {
    try {
        const { artworkId, rating } = req.body;

        const artwork = await Artwork.findById(artworkId);
        if (!artwork) return res.status(404).json({ message: 'Artwork not found' });

        artwork.ratings.total += rating;
        artwork.ratings.count += 1;

        await artwork.save();
        res.status(200).json({ averageRating: artwork.averageRating });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;

router.delete('/ratings', async (req, res) => {
    try {
        const { artworkId, userId } = req.body;

        const artwork = await Artwork.findById(artworkId);
        if (!artwork) return res.status(404).json({ message: 'Artwork not found' });

        const ratingIndex = artwork.ratings.findIndex(r => r.userId.toString() === userId);
        if (ratingIndex === -1) return res.status(404).json({ message: 'Rating not found' });

        artwork.ratings.splice(ratingIndex, 1); 
        await artwork.save();

        res.status(200).json({ message: 'Rating deleted', averageRating: artwork.averageRating });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});
