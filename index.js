require("dotenv").config();
const express = require("express");
const cors = require("cors");
//const path = require("path");
const app = express();
const connectToMongoDB = require("./database/database");
const corsConfig = require("./corsConfig");
const router = require("./routes/index");

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToMongoDB();

app.use("/api", router);

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`server is on port`);
});
