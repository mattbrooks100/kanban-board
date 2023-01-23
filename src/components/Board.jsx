import React from "react";
import ToDo from "./ToDo.jsx";
// import InProgress from "./InProgress.jsx";
// import Complete from "./Complete.jsx";

const Board = () => {
  return (
    <div className="flex bg-zinc-700 h-screen">
      <ToDo />
    </div>
  );
};

export default Board;
