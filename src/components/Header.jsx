import React from "react";
import CreateNewTask from "./CreateNewTask";

const Header = () => {
  return (
    <header className="flex relative p-4 bg-zinc-900 items-center justify-center">
      <div className="absolute left-5">
        <CreateNewTask />
      </div>
      <div className="text-4xl font-bold text-white">Your Kanban Board</div>
    </header>
  );
};

export default Header;
