import React, { useState } from "react";
import EditTask from "./EditTask.jsx";

const Task = ({ task }) => {
  const [showEdit, setShowEdit] = useState(false);

  // Convert the date to a more human-friendly version
  const newDate = new Date(task.due_date);
  newDate.setDate(newDate.getDate() + 1);
  const formattedDate = newDate.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="my-4 p-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-lg">
      <div className="text-xl font-semibold">{task.description}</div>
      <div>Due by: {formattedDate}</div>
      {showEdit && <EditTask task={task}/>}
      <div className="flex justify-center mt-3 space-x-2">
        <button className="hover:font-bold" onClick={handleEditClick}>
          Edit
        </button>
        <span>|</span>
        <button className="hover:font-bold">Delete</button>
      </div>
    </div>
  );
};

export default Task;
