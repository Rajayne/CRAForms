import React from "react";

const Todo = ({ text }) => {
  return (
    <div>
      <ul>
        <li>{text}</li>
      </ul>
    </div>
  );
};

export default Todo;
