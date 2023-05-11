import React from "react";

const Box = ({ color, h, w }) => {
  return (
    <div>
      <div
        style={{ backgroundColor: color, height: `${h}px`, width: `${w}px` }}
      ></div>
    </div>
  );
};

export default Box;
