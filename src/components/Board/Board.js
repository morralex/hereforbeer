import React, { Component } from "react";
import Tile from "../Tile/Tile";
import faceOne from "../../images/dice/faceOne.png";
import faceTwo from "../../images/dice/faceTwo.png";
import faceThree from "../../images/dice/faceThree.png";
import faceFour from "../../images/dice/faceFour.png";
import faceFive from "../../images/dice/faceFive.png";
import faceSix from "../../images/dice/faceSix.png";
import "./Board.css"
class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: "",
            face: "",
            tiles: Array(8).fill(null),
            board: [[{ player: 1, coins: 21, stars: 0 }, { player: 2, coins: 0, stars: 0 }, { player: 3, coins: 0, stars: 0 }, { player: 4, coins: 0, stars: 0 }], [], [], [], [], [], [], []]
        }
    }
    
    renderTile(i) {
        return (
            <Tile
                players={this.state.board[i]}
            />
        );
    }

    roll = () => {
        return Math.floor(Math.random() * 3) + 1;
    };

    setCurrentValue = () => {
        const val = this.roll()
        const face = this.getFace(val);
        this.setState({ current: val, face })
        this.playerMove(val);

    };

    starCheck = (player,postion) => {
        if (postion >=7 && player.coins >=20){
            player.coins = player.coins - 20;
            player.stars++ ;
            console.log(`You have ${player.coins} coins`);
            console.log(`You have ${player.stars} stars`) 
        }
    }

    getFace = (val) => {
        console.log(val);
        if (val === 1) {
            return faceOne
        } else if (val === 2) {
            return faceTwo
        } else if (val === 3) {
            return faceThree
        } else if (val === 4) {
            return faceFour
        } else if (val === 5) {
            return faceFive
        } else if (val === 6) {
            return faceSix
        }
    }

    playerMove = (roll) => {
        console.log(`Dice Roll : ${roll}`)
        let stopLoop = false;
        for (let i = 0; i < this.state.board.length; i++) {
            let x = -1;
            if (stopLoop === false) {
                let result = this.state.board[i].find(obj => {
                    x++;
                    if (obj.player === 1) {
                        return obj.player === 1;
                    }
                })
                if (result !== undefined) {
                    console.log(`The current position is ${i + roll}`)
                    console.log(`The X is ${x}`)
                    this.state.board[i].splice(x, 1)
                    if (i + roll <= 7) {
                        this.state.board[i + roll].push(result);
                        console.log(this.state.board)
                        stopLoop = true;
                    }
                    else {
                        this.state.board[(i + roll) - (this.state.board.length)].push(result);
                        this.starCheck(result,(i+roll))
                        console.log(this.state.board)
                        stopLoop = true
                    }
                }
            }
        }
    }

    render() {
        return (
            <div>
                {/* <div className="status">{status}</div> */}
                <div className="row">
                    <div className="col s4 id = 0">
                        {this.renderTile(0)}
                    </div>
                    <div className="col s4 id = 1">
                        {this.renderTile(1)}
                    </div>
                    <div className="col s4 id = 2">
                        {this.renderTile(2)}
                    </div>
                </div>
                <div className="row">
                    <div className="col s4 left id =  7">
                        {this.renderTile(7)}
                    </div>
                    {/* this is the code for the dice peice */}
                    <div className="col s4 center-align">
                        <div className="card blue-grey darken-1">
                            <div className="row card-content white-text">
                                <div id="die-pic">
                                    <img id="diceImg" src={this.state.face} alt={this.state.face}></img>
                                </div>
                            </div>
                            <div className="row">
                                <button className="btn-large orange" onClick={this.setCurrentValue}>roll</button>
                            </div>
                        </div>
                    </div>
                    {/* this closes off the dice section */}
                    <div className="col s4 right id = 3">
                        {this.renderTile(3)}
                    </div>
                </div>
                <div className="row">
                    <div className="col s4 id = 6">
                        {this.renderTile(6)}
                    </div>
                    <div className="col s4 id =  5">
                        {this.renderTile(5)}
                    </div>
                    <div className="col s4 id = 4">
                        {this.renderTile(4)}
                    </div>
                </div>
            </div>
        )
    }
}
export default Board;