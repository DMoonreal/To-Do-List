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
  const toogleComplete = (id) => {
    SetTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };
  return (
    <div>
      <ToDoForm addTodo={addTodo}></ToDoForm>
      {todos.map((todo, i) => {
        return (
          <ToDo task={todo} key={i} toogleComplete={toogleComplete}></ToDo>
        );
      })}
    </div>
  );
}
