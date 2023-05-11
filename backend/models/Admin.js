const mongoose=require("mongoose");

// ADMIN
const adminSchema = new mongoose.Schema({
    email: String,
    password: String
});

module.exports=mongoose.model("Admin",adminSchema)