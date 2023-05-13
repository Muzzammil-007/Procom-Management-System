// vendor.js

const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  businessType: {
    type: String,
    required: true
  },
  offering: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
