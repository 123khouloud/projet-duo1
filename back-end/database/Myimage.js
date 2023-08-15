const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const PhotoSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    category: {
      type: String,
      enum: ["wedding", "portrait", "travel"],
    
    } 
  });
  
const Myimage = mongoose.model("Myimage", PhotoSchema);

module.exports.Myimage = Myimage;