import React, { Component } from 'react';
import Tile from "../Tile/Tile";
import faceOne from "../../images/dice/faceOne.png";
import faceTwo from "../../images/dice/faceTwo.png";
import faceThree from "../../images/dice/faceThree.png";
import faceFour from "../../images/dice/faceFour.png";
import faceFive from "../../images/dice/faceFive.png";
import faceSix from "../../images/dice/faceSix.png";
import "./Board.css";
import Questions from "../Questions/Questions";
import Swal from "sweetalert2";



class BoardTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: "",
            face: "",
            tiles: Array(19).fill(null),
            // board: [/*0*/[{ player: 1, coins: 21, stars: 0 }, { player: 2, coins: 0, stars: 0 }, { player: 3, coins: 0, stars: 0 }, { player: 4, coins: 0, stars: 0 }],
            // /*1*/[],/*2*/[], /*3*/[], /*4*/[], /*5*/[], /*6*/[], /*7*/[], /*8*/[], /*9*/[], /*10*/[], /*11*/[], /*12*/[], /*13*/[], /*14*/[], /*15*/[], /*16*/[], /*17*/[], /*18*/[]],

            board: [/*0*/[{ player: 1, coins: 21, stars: 0 }, { player: 2, coins: 0, stars: 0 }, { player: 3, coins: 0, stars: 0 }, { player: 4, coins: 0, stars: 0 }],
            /*1*/[],/*2*/[], /*3*/[], /*4*/[], /*5*/[], /*6*/[], /*7*/[], /*8*/[], /*9*/[], /*10*/[], /*11*/[], /*12*/[], /*13*/[], /*14*/[], /*15*/[], /*16*/[], /*17*/[], /*18*/[]],

            whosTurn: this.props.myTurn,
            optionChosen: '',
            score1: 0,
            score2: 0,
          

        };
        this.turn = "X";
        this.questionTime = false;
        this.questionIndex = 0;
        console.log(this.turn);
        this.gameOver = false;
        this.counter = 0;
        this.currentRound = 1;
        this.playerResult = '';
        this.playerRoll = '';
        this.playersPlayed = 0;
        this.playerOneAnswer = '';
        this.playerTwoAnswer = '';
    }
    

    componentDidMount() {
        this.props.pubnub.getMessage(this.props.gameChannel, (msg) => {
            if (msg.message.turn === this.props.currentPlayer) {
                this.publishMove(msg.message.board);

            }
            // this.publishScore1(msg.message.score1);
            // this.publishScore2(msg.message.score2);
            this.publishScore(msg.message.score1, msg.message.score2)
        })
        this.rndQ()
    }

    rndQ = (questionIndex) => {
        // let randNum = Math.floor(Math.random() * 10)
        const selectedQ = Questions[questionIndex]
        console.log(selectedQ)

    }

    

    answerChosen = (e) => {
        const answerPassed = e.target.id;
        // if (this.props.currentPlayer === 'X') {
        //     this.setState({
        //         optionChosen: answerPassed
        //     });
        // }
        // else {
        //     this.setState({
        //         optionChosen: answerPassed
        //     });
        // }
        this.setState({
            optionChosen: answerPassed
        });

        // Questions[this.questionIndex].answer

        console.log(this.state.optionChosen);
        // this.answerCheck(this.state.optionChosen);
        if (this.state.optionChosen === Questions[this.questionIndex].answer) {
            console.log("Answer is correct")
            // if (this.props.currentPlayer === 'X') {
            //     this.score1 = this.score1 + 10;
            //     console.log(this.score1)
            //     console.log(this.score2)
            // }
            // else {
            //     this.score2 = this.score2 + 10;
            //     console.log(this.score2)
            //     console.log(this.score2)
            // }
            let pieces = {
                'X': this.state.score1,
                'O': this.state.score2
            }
            switch (this.props.currentPlayer) {
                case 'X':
                        pieces['X']+=10;
                    this.setState({
                        score1: pieces['X']
                    })
                    
                    console.log(this.props.currentPlayer)
                    break;

                case 'O':
                    pieces['O']+=10;
                        this.setState({
                            score2: pieces['O']
                        })
                  
                    console.log(this.props.currentPlayer)
                    break;
                default:
                    break;
            }


        }
        else {
            console.log("Answer is incorrect")
        }
        // this.props.pubnub.publish({
        //     message: {
        //         score1: this.scoreOne,
        //         score2: this.scoreTwo
        //     },
        //     channel: this.props.gameChannel
        // });
        this.props.pubnub.publish({
            message: {
                score1: this.state.score1,
                score2: this.state.score2
            },
            channel: this.props.gameChannel
        });
     
    }

    publishScore = (score1, score2) => {

        this.setState({
            score1: score1,
            score2: score2
        })
    }


    // publishScore1 = (score1) => {
    //     this.setState({
    //         score1: score1,
    //     });
    // }
    // publishScore2 = (score2) => {
    //     this.setState({
    //         score2: score2
    //     });
    // }





    // componentDidMount() {
    //     this.props.pubnub.getMessage(this.props.gameChannel, (msg) => {
    //         // Publish move to the opponent's board
    //         if (msg.message.turn === this.props.player) {
    //             // this.publishMove(msg.message.index, msg.message.piece);

    //             // this.publishMove();
    //         }

    //         // Start a new round
    //         else if (msg.message.reset) {
    //             this.setState({
    //                 // squares: Array(9).fill(''),
    //                 // whosTurn: this.props.myTurn,


    //                 board: [/*0*/[{ player: 1, coins: 21, stars: 0 }, { player: 2, coins: 0, stars: 0 }, { player: 3, coins: 0, stars: 0 }, { player: 4, coins: 0, stars: 0 }],
    //         /*1*/[],/*2*/[], /*3*/[], /*4*/[], /*5*/[], /*6*/[], /*7*/[], /*8*/[], /*9*/[], /*10*/[], /*11*/[], /*12*/[], /*13*/[], /*14*/[], /*15*/[], /*16*/[], /*17*/[], /*18*/[]],
    //                 whosTurn: this.props.myTurn,
    //             });

    //             this.turn = 1;
    //             this.gameOver = false;
    //             this.counter = 0;
    //             Swal.close()
    //         }

    //         // End the game and go back to the lobby
    //         else if (msg.message.endGame) {
    //             Swal.close();
    //             this.props.endGame();
    //         }
    //     });
    // }

    // Update score for the winner
    // announceWinner = (winner) => {
    //     let players = {
    //         1: this.state.score1,
    //         2: this.state.score2
    //     }

    //     if (winner === 1) {
    //         players[1] += 1;
    //         this.setState({
    //             score1: players[1]
    //         });
    //     }
    //     else {
    //         players[2] += 1;
    //         this.setState({
    //             score2: players[2]
    //         });
    //     }
    //     // End the game once there is a winner
    //     this.gameOver = true;
    //     // this.newRound(winner);	haven't set up newRound yet
    // }

    //need to edit
    // Opponent's move is published to the board
    // publishMove = () => {
    //     const board = this.state.board;

    //     board = this.state.currentPosition;
    //     // this.turn = (squares[index] === 'X') ? 'O' : 'X';

    //     this.setState({
    //         board: board,
    //         whosTurn: !this.state.whosTurn
    //     });

    //     // this.checkForWinner(squares)
    // }

    //need to edit
    // onMakeMove = (playerMove) =>{
    //     const board = this.state.board;

    //     // Check if the square is empty and if it's the player's turn to make a move
    //     if(!squares[index] && (this.turn === this.props.piece)){ 
    //       squares[index] = this.props.piece;

    //       this.setState({
    //         squares: squares,
    //         whosTurn: !this.state.whosTurn
    //       });

    //       // Other player's turn to make a move
    //       this.turn = (this.turn === 'X') ? 'O' : 'X';

    //       // Publish move to the channel
    //       this.props.pubnub.publish({
    //         message: {
    //           index: index,
    //           piece: this.props.piece,
    //           turn: this.turn
    //         },
    //         channel: this.props.gameChannel
    //       });  

    //       // Check if there is a winner
    //       this.checkForWinner(squares)
    //     }
    //   }



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

    publishMove = (board) => {

        // this.turn = (this.currentPosition === 1)? 'O' : 'X';
        this.turn = (this.turn === 'X') ? 'O' : 'X';
        this.setState({
            board: board,
            whosTurn: !this.state.whosTurn
        });
    }

    playerMove = (roll) => {
        console.log(`Dice Roll : ${roll}`)
        console.log(this.props.gameChannel)
        const board = this.state.board;

        let stopLoop = false;
        for (let i = 0; i < board.length; i++) {
            let x = -1;
            if (stopLoop === false) {
                let result = board[i].find(obj => {
                    x++;
                    if (this.turn === 'X') {
                        return obj.player === 1;
                    }
                    else {
                        return obj.player === 2;
                    }
                })
                if (result !== undefined) {
                    console.log(`The current position is ${i + roll}`)
                    console.log(`The X is ${x}`)
                    board[i].splice(x, 1)
                    if (i + roll <= 18) {
                        board[i + roll].push(result);
                        this.playerResult = result;
                        this.playerRoll = i + roll;
                        console.log(board)
                        // this.state.currentPosition = this.state.board;
                        stopLoop = true;
                    }
                    else {
                        board[(i + roll) - (board.length)].push(result);
                        this.starCheck(result, (i + roll))
                        this.playerRoll = i + roll;
                        this.playerResult = result;
                        console.log(board)
                        // this.state.currentPosition = this.state.board;
                        stopLoop = true
                    }
                }
            }
        }

        this.setState({
            whosTurn: !this.state.whosTurn
        })
        this.turn = (this.turn === 'X') ? 'O' : 'X';
        this.playersPlayed++;
        console.log(this.playersPlayed)
        console.log(this.props.currentPlayer);

        console.log(this.turn);
        console.log(this.board)
        this.props.pubnub.publish({
            message: {
                board: this.state.board,
                currentPlayer: this.props.currentPlayer,
                turn: this.turn
            },
            channel: this.props.gameChannel
        });


    }

    render() {
        let status;
        // Change to current player's turn
        status = `${this.state.whosTurn ? "Your turn" : "Opponent's turn"}`;
        return (
            <div>
                <p className="status-info">{status}</p>
                <div>
                    <p>Player 1 - Points: {this.state.score1}    ||    Stars: </p>
                </div>
                <div>
                    <p>Player 2 - Points: {this.state.score2}    ||    Stars: </p>
                </div>
                <div className="row">
                    {/* ================================ Left Column ================================ */}
                    <div className="col s3">
                        {/* ======= this is the code for the dice peice ======= */}
                        <div className="col s12 center-align">
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
                        {/* ======= this closes off the dice section ======= */}
                    </div>
                    {/* ================================ Gameboard Component ================================ */}
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
                    {/* ================================ Right Column ================================ */}
                    {!this.questionTime &&
                        <div className="col s3">
                            Question Time!
                            <div className="button-container">
                                <div>
                                    {Questions[this.questionIndex].prompt}
                                </div>
                                <button
                                    className="question-button" id='A'
                                    onClick={(e) => this.answerChosen(e)}
                                > {Questions[this.questionIndex].option1}
                                </button>
                                <button
                                    className="question-button" id='B'
                                    onClick={(e) => this.answerChosen(e)}
                                > {Questions[this.questionIndex].option2}
                                </button>
                                <button
                                    className="question-button" id='C'
                                    onClick={(e) => this.answerChosen(e)}
                                > {Questions[this.questionIndex].option3}
                                </button>
                                <button
                                    className="question-button" id='D'
                                    onClick={(e) => this.answerChosen(e)}
                                > {Questions[this.questionIndex].option4}
                                </button>
                            </div>
                        </div>

                    }

                </div>
            </div>

        )
    }
}
export default BoardTwo;