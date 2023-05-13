const express = require('express');
const router = express.Router();
const CompetitionRequest = require('../models/competitionRequest');

// Create a new competition request
router.post('/', async (req, res) => {
  try {
    const { name, email, competition } = req.body;
    const competitionRequest = new CompetitionRequest({
      name,
      email,
      competition
    });
    await competitionRequest.save();
    res.status(201).send(competitionRequest);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Get all competition requests
router.get('/', async (req, res) => {
  try {
    const competitionRequests = await CompetitionRequest.find();
    res.send(competitionRequests);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
