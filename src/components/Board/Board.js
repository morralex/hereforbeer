import React, { Component } from "react";
import Tile from "../Tile/Tile";



class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: this.roll(),
            tiles: Array(8).fill(null),
            board: [[{ player: 1, coins: '', stars: '' }, { player: 2, coins: '', stars: '' }, { player: 3, coins: '', stars: '' }, { player: 4, coins: '', stars: '' }], [], [], [], [], [], [], []]
        }
    }
    renderTile(i) {
        return (
            <Tile
                value={this.state.tiles[i]}
            />
        );
    }
    roll = () => {
        return Math.floor(Math.random() * 3) + 1;
    };
    setCurrentValue = () => {
        const val = this.roll()
        this.setState({ current: val })
        this.playerMove();
    }
    playerMove = (roll) => {
        for (let i = 0; i < this.state.board.length; i++) {
            for (let x = 0; x < [i].length; x++) {
                let result = this.state.board[i].find(obj => {
                    if (obj.player === 1){
                        this.state.board[i].splice(1,1);
                        return obj.player === 1;
                    }
                })
                //move code
                if(result !== undefinded){
                    if ((i + roll) <= 7 )
                    
                }
            }
        }
    }


    render() {
        return (

            <div>
                {/* <div className="status">{status}</div> */}
                <div className="row">
                    <div className="col s4" id="zero">
                        {this.renderTile(0)}
                    </div>
                    <div className="col s4" id="one">
                        {this.renderTile(1)}
                    </div>
                    <div className="col s4" id="two">
                        {this.renderTile(2)}
                    </div>
                </div>
                <div className="row">
                    <div className="col s4 left" id="three">
                        {this.renderTile(3)}
                    </div>
                    {/* <div className="col s4">
                        {this.renderTile(1)}
                    </div> */}
                    <div className="col s4 right" id="seven">
                        {this.renderTile(7)}
                    </div>
                </div>
                <div className="row">
                    <div className="col s4" id="eight">
                        {this.renderTile(4)}
                    </div>
                    <div className="col s4" id="five">
                        {this.renderTile(5)}
                    </div>
                    <div className="col s4" id="six">
                        {this.renderTile(6)}
                    </div>
                </div>
                <div className='parent-dice-custom dice-custom'>
                    <div className='dice-header'>Number</div>
                    <div className='dice-number'>{this.state.current}</div>
                    <button className='dice-roll' onClick={this.setCurrentValue}>Roll</button>
                </div>
            </div>


        )
    }

}

export default Board;