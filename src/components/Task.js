import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <div className="label">{CATEGORY}</div>
      <div className="text">{TEXT}</div>
      <button className="delete" onClick={() => onDelete(text)}>X</button>
    </div>
  );
}

export default Task;
