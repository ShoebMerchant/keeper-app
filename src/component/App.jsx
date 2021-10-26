import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
  const [list, setList] = useState([]);

  function handleClick(note) {
    setList(prevVal => [...prevVal, note]);
  }

  function handleDelButton(id) {
    setList(prevVal => {
      return prevVal.filter((el, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick={handleClick} />
      <Footer />
      {list.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            handleDelButton={handleDelButton}
          />
        );
      })}
    </div>
  );
}
