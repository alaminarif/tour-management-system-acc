const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const tourRouter = require("./routes/tours.routes");

app.use("/api/v1/tour", tourRouter);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
