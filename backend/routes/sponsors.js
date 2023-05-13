const express = require('express');
const router = express.Router();
const Sponsor = require('../models/Sponsors');

// POST /api/sponsors
router.post('/register', async (req, res) => {
  try {
    const sponsor = new Sponsor({
      name: req.body.name,
      logo: req.body.logo,
      url: req.body.url,
    });
    const savedSponsor = await sponsor.save();
    res.json(savedSponsor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/sponsors
router.get('/', async (req, res) => {
  try {
    const sponsors = await Sponsor.find();
    res.json(sponsors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
