import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import notes from "../notes";
console.log(notes);

export default function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map(note => (
        <Note title={note.title} key={note.key} content={note.content} />
      ))}
    </div>
  );
}
