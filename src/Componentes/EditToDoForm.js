import React, { useState } from "react";

export default function EditToDoForm({ editTodo, task }) {
  const [values, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(values, task.id);
    setValue("");
  };
  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <h1 className="ListTitle">Edicion de Tarea</h1>
        <input
          type="text"
          className="ToDoInput"
          placeholder="Task"
          onChange={(e) => setValue(e.target.value)}
          value={values}
        ></input>
        <button type="submit" className="SubmitButton">
          Modificar La Tarea
        </button>
      </form>
    </div>
  );
}
