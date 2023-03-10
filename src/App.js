import { Routes, Route } from "react-router-dom";
import { Game } from './components/Game/index';
import { Home } from './components/Home/index';
import { GlobalStyle, Container } from "./styles";
import { useState } from "react";

function App() {

  const [arrayImgs, setArrayImgs] = useState([]);

  return (
    <>
      <GlobalStyle/>
      <Container>
      <Routes>
        <Route path="/" element={<Home setArrayImgs={setArrayImgs}/>} />
        <Route path="/game" element={<Game arrayImgsState={[arrayImgs, setArrayImgs]}/>} />
      </Routes>
      </Container>
    </>
  );
}

export default App;
