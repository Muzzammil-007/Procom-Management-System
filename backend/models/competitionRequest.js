const mongoose = require('mongoose');

const competitionRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  competition: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('CompetitionRequest', competitionRequestSchema);
