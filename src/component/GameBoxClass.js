import React, { Component } from 'react';
import ImgRock from '../assets/images/rock.png';
import ImgScissor from '../assets/images/scissor.png';
import ImgPaper from '../assets/images/paper.png';

export default class GameBoxClass extends Component {

    constructor() {
        super()
        this.imgUrl = '';
    }

    getResult = () => {
        if(this.props.state === "rock") {
            this.imgUrl = ImgRock;
        } else if(this.props.state === "scissor") {
            this.imgUrl = ImgScissor;
        } else if(this.props.state === "paper") {
            this.imgUrl = ImgPaper;
        }
    }

  render() {
    this.getResult()
    return (
        <div className={`game_box ${this.props.position} ${this.props.result === false ? '' : this.props.result}`}>
            <h2 className='title'>{this.props.title}</h2>
            <div className='img'>
                <img src={this.imgUrl} alt={this.props.state} />
            </div>
            <div className='result'>
                <p>{this.props.result}</p>
            </div> 
        </div>
    )
  }
}
