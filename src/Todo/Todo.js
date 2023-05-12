import React from "react";

const Todo = ({ id, text, removeTodo }) => {
  const handleRemove = () => {
    removeTodo(id);
  };
  return (
    <div>
      <ul>
        <li id={id}>
          {text}{" "}
          <button data-testid={id} onClick={handleRemove}>
            X
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
