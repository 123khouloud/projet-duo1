const mongoose = require("mongoose");
const {Myimage}=require('./Myimage.js');
const data= require("../database/Myimage.js")
const mongoUri = "mongodb://127.0.0.1/portfolio1";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{console.log("db connected :)")}).catch(err=>console.log(err));
const db = mongoose.connection;


const getAllphotos = () => {
return Myimage.find()
};


const add=(data)=>{
return Myimage.create(data)
};



const update = (id, data) => {
  return Myimage.updateOne({ _id: id }, data);
};


const remove = (id) => {
  return Myimage.deleteOne({_id: id });
};



module.exports = {
  db,  
  getAllphotos,
  add,
  update,
  remove
};