import React from "react";

const Box = ({ id, color, h, w, removeBox }) => {
  const handleRemove = () => removeBox(id);
  return (
    <div>
      <div
        data-testid={id}
        onClick={handleRemove}
        style={{ backgroundColor: color, height: `${h}px`, width: `${w}px` }}
      ></div>
    </div>
  );
};

export default Box;
