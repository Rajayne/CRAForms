import React from "react";

const NewTodoForm = ({ addTodo }) => {
  const handleSubmit = () => {
    alert("Submitted!");
  };
  return (
    <div>
      <h2>New Todo Form</h2>
      <form className="newTodoForm" onSubmit={handleSubmit}>
        <input
          name="newTodo-input"
          id="newTodo-input"
          type="text"
          placeholder="New Todo"
        ></input>
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
