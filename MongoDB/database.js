const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json'); // path to the JSON file

const uri = 'mongodb://localhost:27017/dashboard'; // URI for the MongoDB database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // connect to the database

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB database');
});

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

const Data = mongoose.model('Data', dataSchema); // create a model for the data

fs.readFile(dataPath, 'utf8', function (err, data) {
  if (err) {
    console.error(err);
  } else {
    const dataArray = JSON.parse(data);
    Data.insertMany(dataArray, function (err, docs) {
      if (err) {
        console.error(err);
      } else {
        console.log('Data imported to MongoDB database');
      }
    });
  }
});
