const mongoose=require("mongoose");

//  a Company schema and model
const companySchema = new mongoose.Schema({
    name: String,
    email: String,
    reps: Number,
    representatives: [String]
});

module.exports=mongoose.model("Company",companySchema)