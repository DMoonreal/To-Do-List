import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
uuidv4();
export default function ToDoWrapper() {
  const [todos, SetTodos] = useState([]);

  const addTodo = (todo) => {
    SetTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  return (
    <div>
      <ToDoForm addTodo={addTodo}></ToDoForm>
      {todos.map((todo, i) => {
        return <ToDo task={todo} key={i}></ToDo>;
      })}
    </div>
  );
}
