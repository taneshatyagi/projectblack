const Data = require('../models/data');

exports.getAllRegions = async (req, res) => {
  try {
    const data = await Data.find();
    const regions = [...new Set(data.map((item) => item.region))];
    res.json(regions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
