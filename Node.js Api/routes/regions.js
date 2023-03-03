const express = require('express');
const Data = require('../models/data');

const router = express.Router();

// Get all regions
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    const regions = [...new Set(data.map((item) => item.region))];
    res.json(regions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
