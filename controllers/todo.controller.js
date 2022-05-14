const todoServices = require("../services/todo.service");

const all = async (req, res) => {
  try {
    const all = await todoServices.all();
    res.status(200).send(all);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const addNew = async (req, res) => {
  const todo = req.body;
  try {
    const newTodo = await todoServices.addNew(todo);
    res.status(201).send(newTodo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const changeField = async (req, res) => {
  const { id, field, newValue } = req.body;
  try {
    const updatedTodo = await todoServices.changeField(id, field, newValue);
    console.log(updatedTodo);
    res.status(200).send(updatedTodo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteAll = async (req, res) => {
  try {
    await todoServices.deleteAll();
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteAllExceptInProgress = async (req, res) => {
  try {
    await todoServices.deleteAllExceptInProgress();
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  all,
  addNew,
  changeField,
  deleteAll,
  deleteAllExceptInProgress,
};
