
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/procom', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

//  a Company schema and model
const companySchema = new mongoose.Schema({
  name: String,
  email: String,
  reps: Number,
  representatives: [String]
});

const Company = mongoose.model('Company', companySchema);

//  a route to create a new company
app.post('/api/companies', async (req, res) => {
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

//  a route to get all companies
app.get('/api/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// ADMIN
const adminSchema = new mongoose.Schema({
  email: String,
  password: String
});

const Admin = mongoose.model('Admin', adminSchema);

app.post('/api/admin/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(409).send('Email already exists');
    }
    const newAdmin = new Admin({ email, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/api/admin', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});


// Register for competitions
const participantSchema = new mongoose.Schema({
  name: String,
  email: String,
  competition: String
});

const Participant = mongoose.model('Participant', participantSchema);

//  a route to create a new participant
app.post('/api/participants', async (req, res) => {
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
app.get('/api/participants', async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

//  a route to get all participants for a specific competition
app.get('/api/participants/:competition', async (req, res) => {
  try {
    const { competition } = req.params;
    const participants = await Participant.find({ competition });
    res.json(participants);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});


//  a Competition schema and model
const competitionSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Competition = mongoose.model('Competition', competitionSchema);

//  a route to create a new competition
app.post('/api/competitions', async (req, res) => {
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
app.get('/api/competitions', async (req, res) => {
  try {
    const competitions = await Competition.find();
    res.json(competitions);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// route to get information for a specific competition
app.get('/api/competitions/:competitionName', async (req, res) => {
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

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});