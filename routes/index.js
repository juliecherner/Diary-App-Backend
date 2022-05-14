const express = require("express");
const router = express.Router();

const adviceRoutes = require("./advice.route");
const todoRoutes = require("./todo.routes");

router.get("/healthcheck", () => {
  return res.sendStatus(200);
});

router.use("/advice", adviceRoutes);
router.use("/todos", todoRoutes);

module.exports = router;
