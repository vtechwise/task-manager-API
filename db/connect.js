const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://victor:fourboys@cluster0.3mpum.mongodb.net/task-manager?retryWrites=true&w=majority&appName=Cluster0";


const connectDB = (url) => {
     mongoose.connect(connectionString); 
  }

module.exports = connectDB
