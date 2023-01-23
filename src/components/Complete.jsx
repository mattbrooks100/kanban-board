import React from "react";
import { tasksState } from "../tasksState.js";
import { useRecoilState } from "recoil";
import Task from "./Task.jsx";

const Complete = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  return (
    <div className="flex flex-col m-4 p-4 w-1/3 bg-zinc-800 text-white content-start rounded-lg shadow-lg">
      <div className="flex justify-center pb-2 text-3xl font-bold border-b-2 border-zinc-500">
        Complete
      </div>
      <div>
        {tasks
          .filter((task) => task.complete)
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default Complete;
