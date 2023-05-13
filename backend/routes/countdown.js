const express = require('express');
const router = express.Router();
const Countdown = require('../models/Countdown');

// GET countdown time for a specific event
router.get('/countdown/:eventId', async (req, res) => {
  try {
    const countdown = await Countdown.findOne({ eventId: req.params.eventId });
    if (!countdown) {
      return res.status(404).json({ message: 'Countdown not found' });
    }
    res.json(countdown);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

router.post('/countdown/:eventId', async (req, res) => {
    const { days, hours, minutes, seconds } = req.body;
    const countdownFields = { days, hours, minutes, seconds, eventId: req.params.eventId };
  
    try {
      let countdown = await Countdown.findOne({ eventId: req.params.eventId });
      if (countdown) {
        // Update existing countdown
        countdown = await Countdown.findOneAndUpdate(
          { eventId: req.params.eventId },
          { $set: countdownFields },
          { new: true }
        );
        return res.json(countdown);
      }
      // Create new countdown
      countdown = new Countdown(countdownFields);
      await countdown.save();
      res.json(countdown);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  });

module.exports = router;