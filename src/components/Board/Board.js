import React, { Component } from "react";
import Tile from "../Tile/Tile";
// import Dice from "../Dice/Dice"
import Start from "../Star/Star";


class Board extends Component {
    state = {
        tiles: Array(8).fill(null)

    }
    renderTile(i) {
        return (
            <Tile
                value={this.state.tiles[i]}
            />
        );
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
                    {/* <div className="col s4">
                        {this.renderTile(1)}
                    </div> */}
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