const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./app");

mongoose.connect(process.env.Local_DATABASE).then(() => {
  console.log("database connected");
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
