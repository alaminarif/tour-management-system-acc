const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./app");
const port = 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
