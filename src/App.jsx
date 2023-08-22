import React, { useState } from "react";
import './App.css';
import styled from 'styled-components';
import HomePage from "./components/HomePage";
import GamePlay from "./components/GamePlay";



function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  };

  return (
  <>
    {isGameStarted ? <GamePlay /> : <HomePage toggle={toggleGamePlay}/>}
  </>
);
}

export default App;