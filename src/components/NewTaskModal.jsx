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
      <div className="modal-container flex flex-col relative top-5 mx-auto w-3/4 bg-white rounded-lg shadow-lg">
        <button
          className="absolute right-3 top-1 p-1 bg-gray-200 rounded-md"
          onClick={() => setNewTaskShow(false)}
        >
          X
        </button>
        <div className="modal-title flex justify-center mx-4 py-2 border-b-2">
          <div className="text-2xl font-bold">New Task</div>
        </div>
        <div className="modal-body">
          <div>Form goes here</div>
        </div>
        <div className="modal-footer">
          <button>Submit</button>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
