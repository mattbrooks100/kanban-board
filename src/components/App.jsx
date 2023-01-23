import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../tasksState.js";
import { newTaskShow } from "../newTaskShow.js";
import axios from "axios";
import Header from "./Header.jsx";
import Board from "./Board.jsx";
import Footer from "./Footer.jsx";
import NewTaskModal from "./NewTaskModal.jsx";

const App = () => {
  // State hook for all tasks
  const [tasks, setTasks] = useRecoilState(tasksState);
  // State hook to display the new task modal
  const [taskShow, setNewTaskShow] = useRecoilState(newTaskShow);

  useEffect(() => {
    axios("http://localhost:3000/api/tasks").then((res) => {
      const tasks = res.data;
      setTasks(tasks);
    });
  }, []);

  return (
    <main className="bg-zinc-700 h-screen">
      <Header />
      {taskShow && <NewTaskModal />}
      <Board />
      <Footer />
    </main>
  );
};

export default App;
