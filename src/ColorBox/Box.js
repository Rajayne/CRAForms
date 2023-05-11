import React from "react";

const Box = ({ color, h, w }) => {
  return (
    <div>
      <div style={{ backgroundColor: color, height: h, width: w }}></div>
    </div>
  );
};

export default Box;
