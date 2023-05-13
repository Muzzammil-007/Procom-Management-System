// models/leaderboard.js

const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  winningTeamImage: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  winningScore: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
