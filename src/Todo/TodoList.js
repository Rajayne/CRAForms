import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const initialTodos = ["Water the plants", "Feed the dog"];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <Todo text={todo} />
      ))}
      <NewTodoForm />
    </div>
  );
};

export default TodoList;
