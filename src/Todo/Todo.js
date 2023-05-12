import React from "react";

const Todo = ({ text }) => {
  return (
    <div>
      <ul>
        <li>
          {text} <button>X</button>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
