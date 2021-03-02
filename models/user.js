const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  moneys: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});
module.exports = model("User", userSchema);
