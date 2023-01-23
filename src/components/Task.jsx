import React from "react";

const Task = ({ task }) => {
  // Convert the date to a more human-friendly version
  const newDate = new Date(task.due_date);
  newDate.setDate(newDate.getDate() + 1);
  const formattedDate = newDate.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="my-4 p-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-lg">
      <div className="text-xl font-semibold">{task.description}</div>
      <div>Due by: {formattedDate}</div>
    </div>
  );
};

export default Task;
