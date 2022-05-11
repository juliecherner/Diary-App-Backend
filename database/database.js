const mongoose = require("mongoose");

const connectToMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
  } catch {
    throw new Error("Couldn't connect to Mongo'");
  }
};

module.exports = connectToMongoDB;
