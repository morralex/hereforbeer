import React, { Component } from "react";
import './dice.css'

class Dice extends Component {
    state = {}
    render() {
        return (
            // <div class="row">
            //     <div class="col s12 m6">
            //         <div class="card">
            //             <div class="card-image">
                            
            //                 <a class="btn-floating halfway-fab waves-effect waves-light red"></a>
            //             </div>
            //             <div class="card-content">
            //                 <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            //             </div>
            //         </div>
            //     </div>
            // </div> 
            <div className='parent-dice-custom dice-custom'>
                <div className = 'dice-header'>Number Display</div>
                <div className='dice-number'>Number</div>
                <button className='dice-roll'>Roll</button>

            </div>
        );
    }
}

export default Dice;