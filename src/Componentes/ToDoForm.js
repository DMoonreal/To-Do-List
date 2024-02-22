import React from "react";

export default function ToDoForm() {
  return (
    <div>
      <form className="TodoForm">
        <input type="text" className="ToDoInput" placeholder="Task"></input>
        <button type="submit" className="SubmitButton">
          Agregar
        </button>
      </form>
    </div>
  );
}
