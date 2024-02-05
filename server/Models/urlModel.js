const mongoose = require("mongoose");
const nanoid = require("nanoid");

const urlSchema = mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const UrlData = mongoose.model("UrlData", urlSchema);

module.exports = UrlData;
