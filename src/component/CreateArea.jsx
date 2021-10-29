import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [NoteIsClicked, setNoteClick] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevVal) => ({ ...prevVal, [name]: value }));
  }

  function handleNoteClick() {
    setNoteClick(true);
  }

  return (
    <div>
      <form className="create-note">
        {NoteIsClicked && (
          <input
            value={note.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />
        )}

        <textarea
          value={note.content}
          onChange={handleChange}
          onClick={handleNoteClick}
          name="content"
          placeholder="Take a note..."
          rows={NoteIsClicked ? 3 : 1}
        />

        <Zoom in={NoteIsClicked}>
          <Fab
            onClick={(event) => {
              props.handleClick(note);
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
