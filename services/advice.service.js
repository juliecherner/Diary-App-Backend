const Advice = require("../models/advice.model");

const add = async (newAdvice) => {
  if (newAdvice.text.length < 1) {
    throw new Error("Text is empty");
  }

  const addedAdvice = await Advice.create(newAdvice);

  if (!addedAdvice) {
    throw new Error("The advice is not added");
  }

  return addedAdvice;
};

const findAll = async () => {
  const all = await Advice.find();

  if (all === null) {
    throw new Error("Not found");
  }

  return all;
};

const deleteById = async (id) => {
  const deletedAdvice = await Advice.findByIdAndDelete(id);

  if (deletedAdvice === null) {
    throw new Error("Not deleted");
  }

  return deletedAdvice;
};

const getRandomAdvice = async () => {
  const all = await findAll();
  const random = Math.floor(Math.random() * all.length);
  return all[random];
};

module.exports = { add, findAll, deleteById, getRandomAdvice };
