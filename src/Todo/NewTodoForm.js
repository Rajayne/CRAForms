import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const initialState = { key: "", text: "" };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData((formData) => ({ ...formData, text: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted ${formData.text}!`);
    setFormData(initialState);
  };

  return (
    <div>
      <h2>New Todo Form</h2>
      <form className="newTodoForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="newTodo-input"
          id="newTodo-input"
          type="text"
          placeholder="New Todo"
          value={formData.text}
        ></input>
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
