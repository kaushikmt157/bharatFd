const mongoose = require("mongoose");

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer_en: { type: String, required: true }, // English answer
  answer_hi: { type: String },  // Hindi answer
  answer_bn: { type: String },  // Bengali answer
});

module.exports = mongoose.model("FAQ", FAQSchema);
