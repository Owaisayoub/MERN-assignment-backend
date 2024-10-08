const express = require("express");
const Review = require("../models/Review");

const router = express.Router();

// Get reviews for a product
router.get("/:productId", async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId });
    res.json(reviews);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// Post a new review
router.post("/", async (req, res) => {
  try {
    const newReview = new Review(req.body);
    console.log(req.body);
    await newReview.save();
    res.json(newReview);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
