import React from "react";

export default function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.handleDelButton(props.id);
        }}
      >
        <span role="img" aria-label="bin">
          🗑️
        </span>
      </button>
    </div>
  );
}
