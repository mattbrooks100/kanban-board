import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../tasksState.js";

const EditTask = ({ task }) => {
  const [status, setStatus] = useState("");
  const [tasks, setTasks] = useRecoilState(tasksState);

  const updateStatus = (e) => {
    setStatus(e.target.value);
  };

  const editTask = (id, status) => {
    // PATCH request to the server to update the task in the DB
    axios
      .patch(`http://localhost:3000/api/tasks/${id}`, {
        to_do: status == "to_do",
        in_progress: status == "in_progress",
        complete: status == "complete",
      })
      // Update React tasksState to reflect the update task
      .then((res) => {
        const updatedTask = res.data;
        const indexOfTaskToUpdate = tasks.findIndex((task) => task.id === id);
        const updateTasks = [...tasks];
        updateTasks[indexOfTaskToUpdate] = updatedTask;
        setTasks(updateTasks);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(task.id, status);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-2 space-x-2">
        <label>Task Status</label>
        <select value={status} onChange={updateStatus} className="text-black">
          <option value="" disabled>
            Select one
          </option>
          <option value="to_do">To do</option>
          <option value="in_progress">In progress</option>
          <option value="complete">Complete</option>
        </select>
        <button type="submit" className="hover:font-bold">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditTask;
