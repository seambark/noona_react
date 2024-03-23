import React, { useState } from 'react';
import GameBox from '../component/GameBox';

const RockPaperScissor = () => {
  const gameState = ['scissor','rock','paper'];
  const [userState, setUserState] = useState('rock');
  const [computerState, setComputerState] = useState('rock');
  const [userResult, setUserResult] = useState('');

  const gameStateEvent = (e) => {
    const thisState = e.target.dataset.state;
    randomState(thisState)
  }

  const randomState = (num) => {
    let randomNum = gameState[Math.floor(Math.random()*gameState.length)];
    setComputerState(randomNum);
    setUserState(num);
    resultCheck(num,randomNum)
  }

  const resultCheck = (userNum,comNum) => {
  
    if(userNum === comNum) {
      setUserResult('tie');
    } else {
      if(userNum === 'scissor') {
        comNum === 'rock' ? setUserResult('loser') : setUserResult('winner');
      } else if(userNum === 'rock'){
        comNum === 'paper' ? setUserResult('loser') : setUserResult('winner');
      } else if(userNum === 'paper') {
        comNum === 'scissor' ? setUserResult('loser') : setUserResult('winner');
      }
    }
  }

  return (
    <div className='game_area content'>
      <h1 className='main_title'>가위바위보 게임</h1>
        <div className='game'>
          <GameBox title="You" position='left' state={userState} result={userResult}/>
          <GameBox title="Computer" position='right' state={computerState} result={userResult !== '' && (userResult === 'tie'? userResult : (userResult === 'winner'? 'loser': 'winner'))}/>
          <div className='copyright'>Designed by Freepik</div>
        </div>
        <div className='control'>
          <button type='button' className='btn_scissor' data-state='scissor' onClick={gameStateEvent}>가위</button>
          <button type='button' className='btn_rock' data-state='rock' onClick={gameStateEvent}>바위</button>
          <button type='button' className='btn_paper' data-state='paper' onClick={gameStateEvent}>보</button>
        </div>
        
    </div>
  )
}

export default RockPaperScissor