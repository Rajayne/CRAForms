import React from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <Todo text="Water the plants" />
      <NewTodoForm />
    </div>
  );
};

export default TodoList;
