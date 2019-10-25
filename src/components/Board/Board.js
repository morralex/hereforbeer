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
    state = {
        tiles: Array(8).fill(null),
        face: ""
    }
    renderTile(i) {
        return (
            <Tile
                value={this.state.tiles[i]}
            />
        );
    }

    setFace = () => {

        let val = Math.floor(Math.random() * 6) + 1;

        if (val === 1) {
            this.setState({ current: val, face: faceOne })
        } else if (val === 2) {
            this.setState({ current: val, face: faceTwo })
        } else if (val === 3) {
            this.setState({ current: val, face: faceThree })
        } else if (val === 4) {
            this.setState({ current: val, face: faceFour })
        } else if (val === 5) {
            this.setState({ current: val, face: faceFive })
        } else if (val === 6) {
            this.setState({ current: val, face: faceSix })
        }
        console.log(val)
    }

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
                    <div className="col s4 center-align">
                        <div class="card blue-grey darken-1">
                            <div class="row card-content white-text">
                                <div id="die-pic">
                                    <img id="diceImg" src={this.state.face} alt={this.state.current}></img>
                                </div>
                            </div>
                            <div class="row">
                                <button class="btn-large orange" onClick={this.setFace}>roll</button>
                            </div>
                        </div>
                    </div>
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