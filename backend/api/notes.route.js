import express from "express";
import NotesCtrl from "./notes.controller.js";

const router = express.Router();

router
  .route("/notes")
  .get(NotesCtrl.apiGetNotes)
  .post(NotesCtrl.apiAddNotes)
  .delete(NotesCtrl.apiDeleteNotes)
  .put(NotesCtrl.apiPutNotes);
export default router;
