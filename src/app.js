const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const exampleRoutes = require("./routes/exampleRoutes");
const faqRoutes = require("./routes/faqRoutes");
require("dotenv").config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default route for root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Backend API");
});

// Routes
app.use("/api", faqRoutes);
app.use("/api/examples", exampleRoutes);

module.exports = app;
