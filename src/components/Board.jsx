import React from "react";
import ToDo from "./ToDo.jsx";
import InProgress from "./InProgress.jsx";
import Complete from "./Complete.jsx";

const Board = () => {
  return (
    <div className="flex">
      <ToDo />
      <InProgress />
      <Complete />
    </div>
  );
};

export default Board;
