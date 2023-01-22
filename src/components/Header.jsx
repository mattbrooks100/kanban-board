import React from "react";
import CreateNewTask from "./CreateNewTask";

const Header = () => {
  return (
    <header className="flex relative p-4 bg-slate-300 items-center justify-center">
      <div className="absolute left-2">
        <CreateNewTask />
      </div>
      <div className="text-4xl font-bold">Your Kanban Board</div>
    </header>
  );
};

export default Header;
