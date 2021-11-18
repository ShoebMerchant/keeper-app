import NotesDAO from "../dao/notesDAO.js";

export default class apiGetNotes {
  static async apiGetNotes(req, res, next) {
    const Notes = await NotesDAO.getNotes();
    res.json(Notes);
  }

  static async apiAddNotes(req, res, next) {
    const { title, body } = req.body;
    await NotesDAO.addNotes(title, body);
    res.json({ success: "added" });
  }

  static async apiDeleteNotes(req, res, next) {
    const { id } = req.query;
    await NotesDAO.deleteNotes(id);
    res.json({ success: "deleted" });
  }

  static async apiPutNotes(req, res, next) {
    const { body, title } = req.body;
    const { id } = req.query;
    await NotesDAO.updateNotes(id, body, title);
    res.json({ success: "updated" });
  }
}
