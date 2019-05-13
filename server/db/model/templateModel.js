const mongoose = require("mongoose");

let Schema = mongoose.Schema;
let templateModelSchema = new Schema({
  _id: Number,
  name: String,
  path: String,
  box_count: Number,
  width: Number,
  height: Number,
  file_type: String
});

let templateModel = mongoose.model("template", templateModelSchema);

module.exports = templateModel;
