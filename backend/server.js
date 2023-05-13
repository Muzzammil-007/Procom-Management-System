const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const adminRoute = require("./routes/admin");
const companyRoute = require("./routes/company");
const competitionRoute = require("./routes/competition");
const participantRoute = require("./routes/participants");
const sponsorsRoute = require("./routes/sponsors");
const vendorsRoute = require("./routes/vendors");
const leaderboardRouter = require('./routes/leaderboard');
const countdownRoute = require('./routes/countdown');
const itineraryRouter = require('./routes/itinerary');
const competitionRequestRouter = require('./routes/competitionRequests');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB database connection established successfully!");
  });

app.use("/api/companies", companyRoute);
app.use("/api/admin", adminRoute);
app.use("/api/participants", participantRoute);
app.use("/api/competitions", competitionRoute);
app.use("/api/sponsors", sponsorsRoute);
app.use('/api/vendors', vendorsRoute);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/countdown', countdownRoute);
app.use('/itinerary', itineraryRouter);
app.use('/api/competition-request', competitionRequestRouter);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
