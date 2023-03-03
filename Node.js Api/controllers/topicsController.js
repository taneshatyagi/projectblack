const Data = require('../models/data');

exports.getAllTopics = async (req, res) => {
  try {
    const data = await Data.find();
    const topics = [...new Set(data.flatMap((item) => item.topics))];
    res.json(topics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
