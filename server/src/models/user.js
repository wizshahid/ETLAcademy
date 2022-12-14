const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, default: null },
  email: { type: String, unique: true },
  password: String,
  status: String,
  role: String,
});

module.exports = mongoose.model("user", userSchema);
