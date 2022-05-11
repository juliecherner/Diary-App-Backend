const adviceController = require("../services/advice.service");

const add = async (req, res) => {
  const newAdvice = req.body;
  try {
    const addedAdvice = await adviceController.add(newAdvice);
    res.status(201).send(addedAdvice);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const all = await adviceController.findAll();
    res.status(200).send(all);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAdvice = await adviceController.deleteById(id);
    res.status(200).send(deletedAdvice);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getRandomAdvice = async (req, res) => {
  try {
    const randomAdvice = await adviceController.getRandomAdvice();
    console.log(randomAdvice);
    res.status(200).send(randomAdvice);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { add, findAll, deleteById, getRandomAdvice };
