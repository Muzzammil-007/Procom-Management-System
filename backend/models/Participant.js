const mongoose=require("mongoose");

// Register for competitions
const participantSchema = new mongoose.Schema({
    name: String,
    email: String,
    competition: String
  });
  
module.exports=mongoose.model("participant",participantSchema)