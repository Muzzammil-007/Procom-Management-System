const router = require("express").Router();
const Competition = require("../models/Competition");


// a route to create a new competition
router.post('/', async (req, res) => {
    try {
      const { name, description } = req.body;
      const competition = new Competition({ name, description });
      await competition.save();
      res.json(competition);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
  
  // a route to get all competitions
  router.get('/', async (req, res) => {
    try {
      const competitions = await Competition.find();
      res.json(competitions);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
  
  // route to get information for a specific competition
  router.get('/:competitionName', async (req, res) => {
    try {
      const competitionName = req.params.competitionName;
      const competition = await Competition.findOne({ name: competitionName });
      if (!competition) {
        return res.sendStatus(404);
      }
      res.json(competition);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });

module.exports = router;