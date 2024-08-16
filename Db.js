const mongoose = require('mongoose');
const con=async()=>{ await mongoose.connect("// db url ").then(console.log("connected to database")).catch(err=>console.log(err))};

module.exports = con;