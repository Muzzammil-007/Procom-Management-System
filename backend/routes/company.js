const router = require("express").Router();
const Company = require("../models/Company");

//  a route to create a new company
router.post('/', async (req, res) => {
    try {
      const { name, email, reps, representatives } = req.body;
      const company = new Company({ name, email, reps, representatives });
      await company.save();
      res.json(company);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });

  // a route to get all companies
router.get('/', async (req, res) => {
    try {
      const companies = await Company.find();
      res.json(companies);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
  

module.exports = router;