const express = require("express");
const router = express.Router();

const AdviceRoutes = require("./advice.route");
router.get("/healthcheck", () => {
  return res.sendStatus(200);
});

router.use("/advice", AdviceRoutes);

module.exports = router;
