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
// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
