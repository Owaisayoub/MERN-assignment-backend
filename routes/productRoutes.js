const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    console.log("i am get request");
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});
router.post("/", async (req, res) => {
  try {
    const { name, description, price, size } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      size,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.log("something went wrong...");
  }
});

// Get product by ID
router.get("/:id", async (req, res) => {
  console.log("hi");
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
