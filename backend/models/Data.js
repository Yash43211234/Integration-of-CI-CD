const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
}, { timestamps: true });

const DataModel = mongoose.model("Data", DataSchema);

module.exports = DataModel;
