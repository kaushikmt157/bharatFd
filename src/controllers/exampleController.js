const Example = require("../models/ExampleModel");

// Get all examples
const getExamples = async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new example
const createExample = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newExample = new Example({ name, email });
    await newExample.save();
    res.status(201).json(newExample);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getExamples, createExample };
