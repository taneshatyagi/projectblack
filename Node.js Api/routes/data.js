const express = require('express');
const Data = require('../models/data');

const router = express.Router();

// Get all data
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get filtered data
router.get('/filter', async (req, res) => {
  try {
    const endYear = req.query.endYear;
    const topics = req.query.topics;
    const sector = req.query.sector;
    const region = req.query.region;

    const filters = {
      year: { $lte: endYear },
      topics: { $in: topics },
      pest: sector,
      region: region,
    };

    const data = await Data.find(filters);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
