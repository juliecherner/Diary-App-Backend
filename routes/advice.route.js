const express = require("express");
const router = express.Router();
const adviceController = require("../controllers/advice.controller");

router.post("/", adviceController.add);
router.get("/", adviceController.findAll);
router.delete("/:id", adviceController.deleteById);
router.get("/random", adviceController.getRandomAdvice);

module.exports = router;
