const mongoose=require("mongoose");

//  a Competition schema and model
const competitionSchema = new mongoose.Schema({
    name: String,
    description: String
  });

  module.exports=mongoose.model("Competition",competitionSchema)
