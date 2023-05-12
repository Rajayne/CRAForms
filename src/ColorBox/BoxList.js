import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const initialState = [
    { id: 1, color: "red", height: "50", width: "50" },
    { id: 2, color: "blue", height: "100", width: "100" },
  ];
  const [boxes, setBoxes] = useState(initialState);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox }]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <h1>Box List</h1>
      {boxes.map((box) => (
        <Box
          key={box.id}
          id={box.id}
          color={box.color}
          h={box.height}
          w={box.width}
          removeBox={removeBox}
        />
      ))}
      <NewBoxForm addBox={addBox} />
    </div>
  );
};

export default BoxList;
