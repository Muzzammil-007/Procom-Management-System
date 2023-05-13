// itinerary.router.js

const express = require('express');
const router = express.Router();
const Itinerary = require('../models/Itinerary');

// GET all itineraries
router.get('/', async (req, res) => {
  try {
    const itineraries = await Itinerary.find({});
    res.status(200).json(itineraries);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// POST a new itinerary
router.post('/', async (req, res) => {
  const { time, event, subevent } = req.body;

  try {
    const newItinerary = new Itinerary({ time, event, subevent });
    await newItinerary.save();
    res.status(200).json(newItinerary);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
