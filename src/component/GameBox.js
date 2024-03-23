import React from 'react'
import ImgRock from '../assets/images/rock.png';
import ImgScissor from '../assets/images/scissor.png';
import ImgPaper from '../assets/images/paper.png';

const GameBox = ({title, state="rock", result="", position=""}) => {
  let altTxt = state;

  if(state === "rock") {
    state=ImgRock;
  } else if(state === "scissor") {
    state=ImgScissor
  } else if(state === "paper") {
    state=ImgPaper
  }

  return (
    <div className={`game_box ${position} ${result === false ? '' : result}`}>
        <h2 className='title'>{title}</h2>
        <div className='img'>
            <img src={state} alt={altTxt} />
        </div>
        <div className='result'>
          <p>{result}</p>
        </div>
    </div>
  )
}

export default GameBox