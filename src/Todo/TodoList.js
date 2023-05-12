import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const initialTodos = [
    { id: 1, text: "Water the plants" },
    { id: 2, text: "Feed the dog" },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          removeTodo={removeTodo}
        />
      ))}
      <NewTodoForm />
    </div>
  );
};

export default TodoList;
