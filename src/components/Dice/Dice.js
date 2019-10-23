import React from "react";
import './dice.css'

function Dice() {
    return (

        <div className='parent-dice-custom dice-custom'>
            <div className='dice-header'>Number Display</div>
            <div className='dice-number'>Number</div>
            <button className='dice-roll'>Roll</button>

        </div>
    );
}

export default Dice;