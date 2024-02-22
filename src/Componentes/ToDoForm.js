import React, { useState } from "react";

export default function ToDoForm({ addTodo }) {
  const [values, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(values);
    setValue("");
  };
  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <h1 className="ListTitle">ToDoList</h1>
        <input
          type="text"
          className="ToDoInput"
          placeholder="Task"
          onChange={(e) => setValue(e.target.value)}
          value={values}
        ></input>
        <button type="submit" className="SubmitButton">
          Agregar
        </button>
      </form>
    </div>
  );
}
