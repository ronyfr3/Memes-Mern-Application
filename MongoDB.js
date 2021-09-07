require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error, "MongoDB connection failed!!");
  }
};
module.exports = connectDB;
