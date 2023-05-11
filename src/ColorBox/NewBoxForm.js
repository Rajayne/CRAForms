import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = () => {
  const initialState = { color: "", height: "", width: "" };
  const [formData, setFormData] = useState(initialState);
  const { color, height, width } = formData;
  return (
    <div className="NewBoxForm">
      <h2>New Box Form</h2>
      <form className="NewBoxForm-form">
        <div className="NewBoxForm-color">
          <label className="NewBoxForm-label" htmlFor="color">
            Box Color:
          </label>
          <input
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
            className="NewBoxForm-input"
            id="width"
            name="width"
            type="number"
            value={width}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default NewBoxForm;
