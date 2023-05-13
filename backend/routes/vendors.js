// vendors.js

const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendors');

// Add a new vendor
router.post('/', async (req, res) => {
  try {
    const vendor = new Vendor({
      name: req.body.name,
      email: req.body.email,
      businessType: req.body.businessType,
      offering: req.body.offering,
      phoneNumber: req.body.phoneNumber
    });
    await vendor.save();
    res.status(201).json(vendor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
