require("dotenv").config();
const express = require("express");

const cors = require("cors");
const path = require("path");

const app = express();

const connectToMongoDB = require("./database/database");

const publicPath = path.join(__dirname, "../client/build");
app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

connectToMongoDB();

app.listen(process.env.PORT || 8000, () => {
  console.log(`server is on port`);
});
