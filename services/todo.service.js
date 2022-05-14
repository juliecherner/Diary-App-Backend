const Todos = require("../models/todo.model");

const all = async () => {
  const all = await Todos.find();
  if (!all) throw new Error("Todos are not found");
  return all;
};

const addNew = async (todo) => {
  const newTodo = await Todos.create(todo);
  if (!newTodo) throw new Error("Todo is not created");
  return newTodo;
};

const changeField = async (id, field, newValue) => {
  const filter = { [field]: newValue };
  const updatedTodo = await Todos.findByIdAndUpdate(
    id,
    {
      $set: {
        [field]: newValue,
      },
    },
    { new: true }
  );
  if (!updatedTodo) throw new Error("Todo is not updated");
  console.log(updatedTodo);
  return updatedTodo;
};

const deleteAll = async () => {
  const ifDropped = await Todos.collection.drop();
  if (!ifDropped) throw new Error("All todos are not deleted");
  return ifDropped;
};

const deleteAllExceptInProgress = async () => {
  const ifDeleted = await Todos.deleteMany({ list: { $ne: "inProgress" } });
  if (!ifDeleted.acknowledged & !ifDeleted.deletedCount)
    throw new Error("All todos that are not in progress are not deleted");
  return ifDeleted;
};

module.exports = {
  all,
  addNew,
  changeField,
  deleteAll,
  deleteAllExceptInProgress,
};
