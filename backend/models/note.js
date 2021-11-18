import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: String,
  body: String,
});

export default mongoose.model("Note", NoteSchema);
