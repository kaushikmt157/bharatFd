const FAQ = require("../models/FAQModel");
const redisClient = require("../config/redisClient");
const translate = require('@vitalets/google-translate-api');

const translateText = async (text, targetLang) => {
  try {
    const translated = await translate(text, { to: targetLang });
    return translated.text;
  } catch (error) {
    console.error("Translation Error:", error);
    return text; // Fallback to original text if translation fails
  }
};

// src/controllers/faqController.js

const getFAQs = (req, res) => {
  res.json({
    message: "List of FAQs will be here."
  });
};

const createFAQ = (req, res) => {
  // Handle FAQ creation here
  res.json({ message: "FAQ created successfully" });
};

// Export both functions
module.exports = { getFAQs, createFAQ };

