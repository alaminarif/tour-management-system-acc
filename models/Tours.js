const mongoose = require("mongoose");

const tourShcema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provid a name"],
    trim: true,
    unique: true,
    minLength: [3, "name must be at least 3 charactaers"],
    maxLength: [100, "name to large"],
  },
  description: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
    min: [0, "price can't nagetive value "],
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["available", "not available"],
      message: "status can't be {VLAUE}",
    },
  },
});

const Tours = mongoose.model("Tours", tourShcema);
module.exports = Tours;
