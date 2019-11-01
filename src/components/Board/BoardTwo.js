import React, { Component } from "react";
import Tile from "../Tile/Tile";
import faceOne from "../../images/dice/faceOne.png";
import faceTwo from "../../images/dice/faceTwo.png";
import faceThree from "../../images/dice/faceThree.png";
import faceFour from "../../images/dice/faceFour.png";
import faceFive from "../../images/dice/faceFive.png";
import faceSix from "../../images/dice/faceSix.png";
import Questions from "../Questions/Questions";
import "./Board.css"
import { conditionalExpression } from "@babel/types";

class BoardTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: "",
            face: "",
            score: "",
            trivia: [],
            tiles: Array(19).fill(null),
            board: [/*0*/[{ player: 1, coins: 21, stars: 0 }, { player: 2, coins: 0, stars: 0 }, { plaer: 3, coins: 0, stars: 0 }, { player: 4, coins: 0, stars: 0 }],
            /*1*/[],/*2*/[], /*3*/[], /*4*/[], /*5*/[], /*6*/[], /*7*/[], /*8*/[], /*9*/[], /*10*/[], /*11*/[], /*12*/[], /*13*/[], /*14*/[], /*15*/[], /*16*/[], /*17*/[], /*18*/[]]
        }
    }

// =========================================== MULTIPLE CHOICE CODE

    rndQ = () => {
        let randNum = Math.floor(Math.random() * 10)
        const selectedQ = Questions[randNum]
        console.log(selectedQ)
        this.setState({ trivia: selectedQ })
    }
// THIS IS JUST TO RENDER THE rndQ TO TEST BUT WE WANT TO COMMENT THIS OUT MOST LIKELY AND CALL IT ELSEWHERE

    componentDidMount() {
        this.rndQ()
    }

    handleAnswer = (event) => {
        event.preventDefault()
        const id = event.target.id
        if (this.state.trivia.answer === id) {
            alert("CORRECT!")
        } else {
            alert ("😤")
        }
    }

// ================== THIS IS WHAT I GOT SO FAR; NOT SURE WHERE TO TAKE IT FROM HERE

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
        const val = this.roll();
        const face = this.getFace(val);
        this.setState({ current: val, face });
        this.playerMove(val)
    };

    starCheck = (player, postion) => {
        if (postion >= 18 && player.coins >= 20) {
            player.coins = player.coins - 20;
            player.stars++;
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
                    if (i + roll <= 18) {
                        this.state.board[i + roll].push(result);
                        console.log(this.state.board)
                        stopLoop = true;
                    }
                    else {
                        this.state.board[(i + roll) - (this.state.board.length)].push(result);
                        this.starCheck(result, (i + roll))
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
                <div className="row">
                    {/* ================================================= Left Column ================================================= */}
                    <div className="col s3">
                        {/* ======= this is the code for the dice peice ======= */}
                        <div className="col s12 center-align">
                            <div className="N/A transparent" id="cardBkG">
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
                        {/* ======= this closes off the dice section ======= */}
                    </div>
                    {/* ================================================= Gameboard Component ================================================= */}
                    <div className="col s6">
                        {/* =========================== FIRST ROW =========================== */}
                        <div className="row">
                            <div className="col s2 id = 0">
                                {this.renderTile(0)}
                            </div>
                            <div className="col s2 id = 1">
                                {this.renderTile(1)}
                            </div>
                            <div className="col s2 id = 2">
                                {this.renderTile(2)}
                            </div>
                            <div className="col s2 id = 3">
                                {this.renderTile(3)}
                            </div>
                            <div className="col s2 id = 4">
                                {this.renderTile(4)}
                            </div>
                            <div className="col s2 id = 5">
                                {this.renderTile(5)}
                            </div>
                        </div>
                        {/* =========================== 2ND ROW =========================== */}
                        <div className="row">
                            <div className="col s2 right id = 6">
                                {this.renderTile(6)}
                            </div>
                        </div>
                        {/* =========================== 3RD ROW =========================== */}
                        <div className="row">
                            <div className="col s2 id = 16">
                                {this.renderTile(16)}
                            </div>
                            <div className="col s2 id = 17">
                                {this.renderTile(17)}
                            </div>
                            <div className="col s2 id = 18">
                                {this.renderTile(18)}
                            </div>
                            <div className="col s2">
                                {/* {this.renderTile(3)} */}
                            </div>
                            <div className="col s2 right id = 7">
                                {this.renderTile(7)}
                            </div>
                        </div>
                        {/* =========================== 4TH ROW =========================== */}
                        <div className="row">
                            <div className="col s2 left id = 15">
                                {this.renderTile(15)}
                            </div>
                            <div className="col s2 right id = 8">
                                {this.renderTile(8)}
                            </div>
                        </div>
                        {/* =========================== 5TH ROW =========================== */}
                        <div className="row">
                            <div className="col s2 id = 14">
                                {this.renderTile(14)}
                            </div>
                            <div className="col s2 id = 13">
                                {this.renderTile(13)}
                            </div>
                            <div className="col s2 id = 12">
                                {this.renderTile(12)}
                            </div>
                            <div className="col s2 id = 11">
                                {this.renderTile(11)}
                            </div>
                            <div className="col s2 id = 10">
                                {this.renderTile(10)}
                            </div>
                            <div className="col s2 id = 9">
                                {this.renderTile(9)}
                            </div>
                        </div>

                    </div>
                    {/* ================================================= Right Column ================================================= */}
                    <div className="col s3">
                        <div className="row">
                            <div className="col s12">
                                <div className="card-panel black white-text">
                                    <h4>QUESTION:</h4>
                                    <h5 id="disQ">{this.state.trivia.prompt}</h5>
                                    <h6>
                                        <li>
                                            <a className="white-text" id="A" onClick={this.handleAnswer}>{this.state.trivia.option1}</a>
                                        </li>
                                        <li>
                                            <a className="white-text" id="B" onClick={this.handleAnswer}>{this.state.trivia.option2}</a>
                                        </li>
                                        <li>
                                            <a className="white-text" id="C" onClick={this.handleAnswer}>{this.state.trivia.option3}</a>
                                        </li>
                                        <li>
                                            <a className="white-text" id="D" onClick={this.handleAnswer}>{this.state.trivia.option4}</a>
                                        </li>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default BoardTwo;