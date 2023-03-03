const Data = require('../models/data');

exports.getAllSectors = async (req, res) => {
  try {
    const data = await Data.find();
    const sectors = [...new Set(data.map((item) => item.pest))];
    res.json(sectors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
