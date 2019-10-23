import React from "react";
import Tile from "../Tile/Tile";
import Dice from "../Dice/Dice"
function Board() {

    return (
           <div className="container">
               <div className="row">
                    <div className="col s4">
                        <Tile id="sq0" />
                    </div>
                    <div className="col s4">
                        <Tile id="sq1" />
                    </div>
                    <div className="col s4">
                        <Tile id="sq2" />
                    </div>
               </div>
               <div className="row">
                    <div className="col s4">
                        <Tile id="sq3" />
                    </div>
                    <div className="col s4">
                        <Dice />
                    </div>
                    <div className="col s4">
                        <Tile id="sq7" />
                    </div>
               </div>
               <div className="row">
                    <div className="col s4">
                        <Tile id="sq6" />
                    </div>
                    <div className="col s4">
                        <Tile id="sq5" />
                    </div>
                    <div className="col s4">
                        <Tile id="sq4" />
                    </div>
               </div>
           </div>
        
    )

}

export default Board;