import React from "react";
import "./Tile.css";

function Tile (props) {
  const playerClasses = props.players.map(player => 'player' + player.player)
  return (
          <div className="box">
            { playerClasses.map( playerClass => <div key={playerClass} className={playerClass}></div>) }
          </div>
         )
}

export default Tile;