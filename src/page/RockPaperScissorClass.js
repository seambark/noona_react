import React, { Component } from 'react';
import GameBoxClass from '../component/GameBoxClass';

export default class RockPaperScissorClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gameState: ['scissor','rock','paper'],
            userState : 'rock',
            computerState:'rock',
            userResult: '',
        }
    }

    gameStateEvent = (e) => {
        const thisState = e.target.dataset.state;
        this.randomState(thisState)
    }

    randomState = (num) => {
        let randomNum = this.state.gameState[Math.floor(Math.random()*this.state.gameState.length)];
        this.setState({computerState:randomNum, userState:num})
        this.resultCheck(num,randomNum)
    }

    resultCheck = (userNum,comNum) => {
        if(userNum === comNum) {
            this.setState({userResult: "tie"})
          } else {
            if(userNum === 'scissor') {
              comNum === 'rock' ? this.setState({userResult: "loser"}) : this.setState({userResult: "winner"});
            } else if(userNum === 'rock'){
              comNum === 'paper' ? this.setState({userResult: "loser"}) : this.setState({userResult: "winner"});
            } else if(userNum === 'paper') {
              comNum === 'scissor' ? this.setState({userResult: "loser"}) : this.setState({userResult: "winner"});
            }
          }
    }

  render() {
    return (
    <div className='game_area'>
        <h1 className='game_title'>가위바위보 게임</h1>
        <div className='game'>
            <GameBoxClass title="You" position='left' state={this.state.userState} result={this.state.userResult}/>
            <GameBoxClass title="Computer" position='right' state={this.state.computerState} result={this.state.userResult !== '' && (this.state.userResult === 'tie'? this.state.userResult : (this.state.userResult === 'winner'? 'loser': 'winner'))}/>
            <div className='copyright'>Designed by Freepik</div>
        </div>
        <div className='control'>
            <button type='button' className='btn_scissor' data-state='scissor' onClick={this.gameStateEvent}>가위</button>
            <button type='button' className='btn_rock' data-state='rock' onClick={this.gameStateEvent}>바위</button>
            <button type='button' className='btn_paper' data-state='paper' onClick={this.gameStateEvent}>보</button>
        </div>
    </div>
    )
  }
}
