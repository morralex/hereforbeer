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
            const face = this.getFace(val);
            console.log(face)
            this.setState({ current: val, face })
            
            // this.playerMove();
        }

        getFace = (val) => {

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
            console.log(this.state.current)
        }
        
        // playerMove = (roll) => {
        //     for (let i = 0; i < this.state.board.length; i++) {
        //         for (let x = 0; x < [i].length; x++) {
        //             let result = this.state.board[i].find(obj => {
        //                 if (obj.player === 1) {
        //                         this.state.board[i].splice(1, 1);
        //                         return obj.player === 1;
        //                     } 
        //                 }
        //             )
        //         }
        //     }
        // }

        render() {
            return (
                <div>
                    {/* <div className="status">{status}</div> */}
                    <div className="row">
                        <div className="col s4">
                            {this.renderTile(0)}
                        </div>
                        <div className="col s4">
                            {this.renderTile(1)}
                        </div>
                        <div className="col s4">
                            {this.renderTile(2)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4 left">
                            {this.renderTile(3)}
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
                        <div className="col s4 right">
                            {this.renderTile(7)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4">
                            {this.renderTile(4)}
                        </div>
                        <div className="col s4">
                            {this.renderTile(5)}
                        </div>
                        <div className="col s4">
                            {this.renderTile(6)}
                        </div>
                    </div>
                </div>
            )
        }
    }
    export default Board;