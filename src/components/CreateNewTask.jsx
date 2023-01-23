import React from "react";
import { useRecoilState } from "recoil";
import { newTaskShow } from "../newTaskShow.js";

const CreateNewTask = () => {
  const [taskShow, setNewTaskShow] = useRecoilState(newTaskShow);

  return (
    <button
      type="button"
      onClick={() => setNewTaskShow(true)}
      className="newTaskBtn text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      Create New Task
    </button>
  );
};

export default CreateNewTask;
