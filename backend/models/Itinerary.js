// itinerary.model.js

const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  time: {
    type: Date,
    required: true
  },
  event: {
    type: String,
    required: true
  },
  subevent: {
    type: String,
    required: true
  }
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
