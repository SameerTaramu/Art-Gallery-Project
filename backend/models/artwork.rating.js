const mongoose = require('mongoose');

const ArtworkSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    ratings: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            rating: Number,
        },
    ],
});

ArtworkSchema.virtual('averageRating').get(function () {
    if (!this.ratings.length) return 0;
    const total = this.ratings.reduce((sum, r) => sum + r.rating, 0);
    return total / this.ratings.length;
});

module.exports = mongoose.model('Artwork', ArtworkSchema);
