const mongoose = require("mongoose");
const MemeSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const meme = mongoose.model("meme", MemeSchema);

module.exports = meme;
