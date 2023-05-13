const mongoose = require('mongoose');

const CountdownSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  }
});

const Countdown = mongoose.model('Countdown', CountdownSchema);

module.exports = Countdown;
