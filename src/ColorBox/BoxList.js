import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const initialState = [
    { color: "red", h: "50px", w: "50px" },
    { color: "blue", h: "100px", w: "100px" },
  ];
  const [boxes, setBoxes] = useState(initialState);
  return (
    <div>
      <h1>Box List</h1>
      {boxes.map((box) => (
        <Box color={box.color} h={box.h} w={box.w} />
      ))}
      <NewBoxForm />
    </div>
  );
};

export default BoxList;
