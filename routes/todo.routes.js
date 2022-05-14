const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.get("/", todoController.all);
router.post("/", todoController.addNew);
router.patch("/", todoController.changeField);
router.delete("/", todoController.deleteAll);
router.delete("/except-in-progress", todoController.deleteAllExceptInProgress);

module.exports = router;
