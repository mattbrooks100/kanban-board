import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { newTaskShow } from "../newTaskShow.js";
import { tasksState } from "../tasksState.js";
import axios from "axios";

const NewTaskModal = () => {
  const [taskShow, setNewTaskShow] = useRecoilState(newTaskShow);
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const updateDate = (e) => {
    setDate(e.target.value);
  };

  const updateStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      description,
      due_date: date,
      to_do: status == "to_do",
      in_progress: status == "in_progress",
      complete: status == "complete",
    };
    console.log(newTask);
    axios.post("http://localhost:3000/api/tasks", newTask).then((res) => console.log(res));

    setTasks([...tasks, newTask]);
    setDescription("");
    setDate("");
    setStatus("");
    setNewTaskShow(false);
  };

  return (
    <div
      className="modal-background absolute insert-0 w-full h-full bg-gray-600 bg-opacity-50"
      id="new-task-modal"
    >
      {/* Modal Container */}
      <div className="modal-container flex flex-col relative top-5 mx-auto w-3/4 bg-white rounded-lg shadow-lg">
        <button
          className="absolute right-3 top-1 p-1 bg-gray-200 rounded-md"
          onClick={() => setNewTaskShow(false)}
        >
          X
        </button>
        {/* Modal Title */}
        <div className="modal-title flex justify-center mx-4 py-2 border-b-2">
          <div className="text-2xl font-bold">New Task</div>
        </div>
        {/* Modal Body */}
        <div className="modal-body flex flex-row relative p-4">
          <form className="w-full" id="new-task-form" onSubmit={handleSubmit}>
            <div className="flex items-center">
              <label className="font-semibold">Description</label>
              <textarea
                name="new-description"
                placeholder="Enter description here"
                className="border-solid border-2 w-full h-15 ml-2"
                value={description}
                onChange={updateDescription}
                required
              ></textarea>
            </div>
            <div className="my-4">
              <label className="font-semibold">Due Date</label>
              <input
                type="date"
                name="new-date"
                className="border-solid border-2 ml-6"
                value={date}
                onChange={updateDate}
                required
              ></input>
            </div>
            <div>
              <label className="font-semibold">Task Status</label>
              <select className="border-solid border-2 ml-2" value={status} onChange={updateStatus}>
                <option value="" disabled>
                  Select one
                </option>
                <option value="to_do">To do</option>
                <option value="in_progress">In progress</option>
                <option value="complete">Complete</option>
              </select>
            </div>
            <div className="modal-footer flex justify-center border-t-2 mt-4">
              <button
                type="submit"
                className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg py-2 px-4 mt-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
