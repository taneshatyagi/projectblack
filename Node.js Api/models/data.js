const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
  {
    id: String,
    intensity: Number,
    likelihood: Number,
    relevance: Number,
    year: Number,
    country: String,
    topics: [String],
    region: String,
    city: String,
    pest: String,
    source: String,
    swot: String,
    description: String,
  },
  { collection: 'data' }
);

module.exports = mongoose.model('Data', dataSchema);
