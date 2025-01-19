const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate("owner");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {}
};
const handleRateProduct =async (req, res) => {
  const { id } = req.params; // Product ID
  const { userId, rating } = req.body; // User ID and rating

  if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid product or user ID" });
  }

  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be a number between 1 and 5" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const existingRatingIndex = product.ratings.findIndex((r) => r.user.toString() === userId);

    if (existingRatingIndex !== -1) {
      // Update the existing rating
      product.ratings[existingRatingIndex].rating = rating;
    } else {
      // Add a new rating
      product.ratings.push({ user: userId, rating });
    }

    // Recalculate average rating
    const totalRatings = product.ratings.reduce((acc, r) => acc + r.rating, 0);
    product.averageRating = totalRatings / product.ratings.length;

    await product.save();

    res.status(200).json({
      message: "Rating updated successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  handleRateProduct
};
