import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
  const initialState = { color: "#000000", height: "", width: "" };
  const [formData, setFormData] = useState(initialState);
  const { color, height, width } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(initialState);
  };

  return (
    <div className="NewBoxForm">
      <h2>New Box Form</h2>
      <form onSubmit={handleSubmit} className="NewBoxForm-form">
        <div className="NewBoxForm-color">
          <label className="NewBoxForm-label" htmlFor="color">
            Box Color:
          </label>
          <input
            onChange={handleChange}
            className="NewBoxForm-input"
            id="color"
            name="color"
            type="color"
            value={color}
          ></input>
        </div>
        <div className="NewBoxForm-height">
          <label className="NewBoxForm-label" htmlFor="height">
            Box Height(px):
          </label>
          <input
            onChange={handleChange}
            className="NewBoxForm-input"
            id="height"
            name="height"
            type="number"
            value={height}
          ></input>
        </div>
        <div className="NewBoxForm-width">
          <label className="NewBoxForm-label" htmlFor="width">
            Box Width(px):
          </label>
          <input
            onChange={handleChange}
            className="NewBoxForm-input"
            id="width"
            name="width"
            type="number"
            value={width}
          ></input>
        </div>
        <button>Add Box!</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
