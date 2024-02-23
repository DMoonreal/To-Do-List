import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
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
  const deleteTodo = (id) => {
    SetTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    SetTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };
  const editTask = (task, id) => {
    SetTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };
  return (
    <div>
      <ToDoForm addTodo={addTodo}></ToDoForm>
      {todos.map((todo, i) => {
        return todo.isEditing ? (
          <EditToDoForm editTodo={editTask} task={todo}></EditToDoForm>
        ) : (
          <ToDo
            task={todo}
            key={i}
            toogleComplete={toogleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          ></ToDo>
        );
      })}
    </div>
  );
}
