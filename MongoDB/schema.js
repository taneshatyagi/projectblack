const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: Array,
  region: String,
  city: String,
  pest: String,
  source: String,
  swot: String,
});

module.exports = mongoose.model('Data', dataSchema);
