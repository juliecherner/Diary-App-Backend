const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    unique: true,
    trim: true,
  },
  date: { type: Date, default: Date.now },
  list: {
    type: String,
    default: "inProgress",
  },
});

const Todos = mongoose.model("Todo", todoSchema);

module.exports = Todos;
