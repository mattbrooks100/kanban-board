import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../tasksState.js";
import axios from "axios";
import Header from "./Header.jsx";
import Board from "./Board.jsx";
import Footer from "./Footer.jsx";
import NewTaskModal from "./NewTaskModal.jsx";

const App = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  useEffect(() => {
    axios("http://localhost:3000/api/tasks").then((res) => {
      const tasks = res.data;
      setTasks(tasks);
      console.log(tasks);
    });
  }, []);

  return (
    <main className="bg-zinc-700 h-screen">
      <Header />
      <NewTaskModal />
      <Board />
      <Footer />
    </main>
  );
};

export default App;
