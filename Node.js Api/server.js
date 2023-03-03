const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Data = require('./schema');

const app = express();
const port = process.env.PORT || 5000;
const uri = 'mongodb://localhost:27017/dashboard'; // URI for the MongoDB database

app.use(express.json());
app.use(cors());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB database');
});

// API endpoint to retrieve all data from the database
app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API endpoint to retrieve data filtered by end year, topics, sector, and region
app.get('/api/data/filter', async (req, res) => {
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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

