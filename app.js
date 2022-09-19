const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
