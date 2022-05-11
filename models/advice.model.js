const mongoose = require("mongoose");

const adviceShema = new mongoose.Schema({
  text: { type: String, unique: true },
});

const Advice = mongoose.model("Advice", adviceShema);

module.exports = Advice;
