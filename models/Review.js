const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  rating: Number,
  comment: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", ReviewSchema);
