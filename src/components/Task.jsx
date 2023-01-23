import React from "react";

const Task = ({ task }) => {
  return (
    <div className="my-4 p-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-lg">
      <p>{task.description}</p>
      <p>{task.due_date}</p>
    </div>
  );
};

export default Task;
