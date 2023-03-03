const Data = require('../models/data');

exports.getAllData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFilteredData = async (req, res) => {
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
};
