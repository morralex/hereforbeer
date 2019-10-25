import React, { Component } from "react";
import './dice.css'

class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: this.roll()
        }
    }
    roll = () => {
        return Math.floor(Math.random() * 3) + 1;
    };
    setCurrentValue = () => {
        const val = this.roll()
        this.setState({ current: val })
    }
    displayDice = (theRoll) => {
        alert(`Your roll is ${theRoll}`);
    };
    render() {
        return (
            <div className='parent-dice-custom dice-custom'>
                <div className='dice-header'>Number</div>
                <div className='dice-number'>{this.state.current}</div>
                <button className='dice-roll' onClick={this.setCurrentValue}>Roll</button>
            </div>
        );
    }
}

export default Dice;