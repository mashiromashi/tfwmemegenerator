import mongoose from "mongoose";

const Schema = mongoose.Schema;
const templateModel = new Schema({
  id: { type: integer },
  name: { type: string },
  path: { type: string },
  box_count: { type: integer },
  width: { type: integer },
  height: { type: integer },
  file_type: { type: string }
});

export default mongoose.model("template", templateModel);
