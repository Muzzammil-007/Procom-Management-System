// routes/leaderboard.js

const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');

// Import the leaderboard model
const Leaderboard = require('../models/Leaderboard');

// GET all competitions
router.get('/', async (req, res) => {
  try {
    const competitions = await Leaderboard.find();
    res.json(competitions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET a competition by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const competition = await Leaderboard.findById(id);
    if (!competition) {
      return res.status(404).json({ message: 'Competition not found' });
    }
    res.json(competition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST a new competition
router.post('/', async (req, res) => {
  try {
    const { name, location, winningTeamImage, date, winningScore } = req.body;
    const competition = new Leaderboard({
      name,
      location,
      winningTeamImage,
      date,
      winningScore,
    });
    const newCompetition = await competition.save();
    res.status(201).json(newCompetition);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
