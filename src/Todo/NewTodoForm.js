import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const initialState = { text: "" };
  const [formData, setFormData] = useState(initialState);

  const initialId = 3;
  const [id, setId] = useState(initialId);

  const handleChange = (e) => {
    setFormData({ text: e.target.value });
  };

  const handleSubmit = (e) => {
    // if (!formData.text) {
    //   alert("New todo must have text!");
    //   return;
    // }
    e.preventDefault();
    addTodo({ id, ...formData });
    setId(id + 1);
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
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
