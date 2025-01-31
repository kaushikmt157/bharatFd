const mongoose = require("mongoose");

const ExampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Example", ExampleSchema);
