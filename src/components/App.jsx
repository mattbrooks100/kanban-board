import { RecoilRoot } from "recoil";
import Header from "./Header.jsx";
import Board from "./Board.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <RecoilRoot>
      <main>
        <Header />
        <Board />
        <Footer />
      </main>
    </RecoilRoot>
  );
}

export default App;
