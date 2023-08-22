import React, { useState } from 'react';
import TotalScore from './TotalScore';
import Numberselector from './Numberselector';
import styled from 'styled-components';
import RollDice from './RollDice';
import { Button, OutlineButton } from "../styled/Button";
import Rules from './Rules';


const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNum = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () =>{

    if(!selectedNumber){
      setError("You have not selected any Number");
      return;
    }
    
    const randomNumber = generateRandomNum(1, 7);

    setCurrentDice((prev) => randomNumber);
   
    
    if(selectedNumber == randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
    };

  const resetScore = () =>{
    setScore(0);
  };
    


  return (
    <MainContainer>
        <div className='main_container'>
            <TotalScore score={score}/>
            <Numberselector 
              error={error}
              setError={setError}
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />
        </div>  
        <RollDice 
          currentDice={currentDice}
          roleDice={roleDice}
        />
        <div className='btns'>
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button
          onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button> 
        </div>
        {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`


padding-top: 70px;
padding: 100px 100px;

.main_container{
    display: flex;
    justify-content: space-between;
    align-items: end;
}

.btns{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`;
