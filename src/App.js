import { Routes, Route } from "react-router-dom";
import { Game } from './pages/Game';
import { Home } from './pages/Home';
import { GlobalStyle } from "./styles";
import { useState } from "react";


function App() {

  const [arrayImgs, setArrayImgs] = useState([]);

  return (
    <>
      <GlobalStyle/>
      <div>
      <Routes>
        <Route path="/" element={<Home setArrayImgs={setArrayImgs}/>} />
        <Route path="/game" element={<Game arrayImgs={arrayImgs}/>} /> */
      </Routes>
      </div>
    </>
  );
}

export default App;
