const router = require("express").Router();
const Participant = require("../models/Participant");

//  a route to create a new participant
router.post('/', async (req, res) => {
    try {
      const { name, email, competition } = req.body;
      const participant = new Participant({ name, email, competition });
      await participant.save();
      res.json(participant);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
  
  //  a route to get all participants
  router.get('/', async (req, res) => {
    try {
      const participants = await Participant.find();
      res.json(participants);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
  
  //  a route to get all participants for a specific competition
  router.get('/:competition', async (req, res) => {
    try {
      const { competition } = req.params;
      const participants = await Participant.find({ competition });
      res.json(participants);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });  

module.exports = router;