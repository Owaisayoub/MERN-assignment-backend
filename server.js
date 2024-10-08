require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const URI = `mongodb+srv://oemollic:xUjw8LhZXijqY71H@cluster0.5sngs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", productRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    // process.exit(1);  // Exit process if connection fails
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
