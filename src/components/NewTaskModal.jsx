import React from "react";
import { useRecoilState } from "recoil";
import { newTaskShow } from "../newTaskShow.js";

const NewTaskModal = () => {
  const [taskShow, setNewTaskShow] = useRecoilState(newTaskShow);

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
          <form className="w-full" id="new-task-form">
            <div className="flex items-center">
              <label className="font-semibold">Description</label>
              <textarea
                name="new-description"
                placeholder="Enter description here"
                className="border-solid border-2 w-full h-15 ml-2"
                required
              ></textarea>
            </div>
            <div className="my-4">
              <label className="font-semibold">Due Date</label>
              <input
                type="date"
                name="new-date"
                className="border-solid border-2 ml-6"
                required
              ></input>
            </div>
            <div>
              <label className="font-semibold">Task Status</label>
              <select className="border-solid border-2 ml-2">
                <option value="to_do">To do</option>
                <option value="in_progress">In progress</option>
                <option value="complete">Complete</option>
              </select>
            </div>
          </form>
        </div>
        <div className="modal-footer flex justify-center border-t-2 mx-4 py-2">
          <button
            className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={(e) => {
              console.log(e.target);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
