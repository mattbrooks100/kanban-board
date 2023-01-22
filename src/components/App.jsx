import { useState } from "react";
import Header from "./Header.jsx";
import CreateNewTask from "./CreateNewTask.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main >
      <Header />
    </main>
  );
}

export default App;
