import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const initialState = [
    { color: "red", height: "50", width: "50" },
    { color: "blue", height: "100", width: "100" },
  ];
  const [boxes, setBoxes] = useState(initialState);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox }]);
  };

  return (
    <div>
      <h1>Box List</h1>
      {boxes.map((box) => (
        <Box color={box.color} h={box.height} w={box.width} />
      ))}
      <NewBoxForm addBox={addBox} />
    </div>
  );
};

export default BoxList;
