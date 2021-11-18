import mongoose from "mongoose";
import Note from "../models/note.js";

const n1 = new Note({ title: "n1", body: "b1" });
const n2 = new Note({ title: "n2", body: "b2" });
const n3 = new Note({ title: "n3", body: "b3" });
const defaultNote = [n1, n2, n3];

class NotesDAO {
  static async getNotes() {
    return await Note.find({}).catch(err => console.error(err));
  }

  static async addNotes(title, body) {
    await Note.insertMany({ title, body });
  }

  static async deleteNotes(id) {
    await Note.deleteOne({ _id: id });
  }

  static async updateNotes(id, body, title) {
    await Note.updateOne({ _id: id }, { title, body });
  }
}

export default NotesDAO;
