const express = require("express");
const { getFAQs, createFAQ } = require("../controllers/faqController"); // Correct import

const router = express.Router();

// Define the GET route for fetching FAQs
router.get('/faqs', getFAQs);  // Use the correct imported function

// Route to create a new FAQ
router.post("/faqs", createFAQ);

module.exports = router;
