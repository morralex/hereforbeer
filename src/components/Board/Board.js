import React from "react";
import Tile from "../Tile/Tile";
import Roll from "../Dice/Dice"
// import Star from "../Star/Star";


function Board() {

    return (
           <div className="container">
               <Roll />
               
               <div className="row">
                    <div className="col s3">
                        <Tile id="sq1" />
                    </div>
                    <div className="col s3">
                        <Tile id="sq2" />
                    </div>
                    <div className="col s3">
                        <Tile id="sq3" />
                    </div>
                    <div className="col s3">
                        <Tile id="sq4" />
                    </div>
               </div>
               <div className="row">
                    <div className="col s3 right">
                        <Tile id="sq12" />
                    </div>
                    <div className="col s3 left">
                        <Tile id="sq5" />
                    </div>
               </div>
               <div className="row">
                    <div className="col s3 right">
                        <Tile id="sq11" />
                    </div>
                    <div className="col s3 left">
                        <Tile id="sq6" />
                    </div>
               </div>
               <div className="row">
                    <div className="col s3">
                        <Tile id="sq10" />
                    </div>
                    <div className="col s3">
                        <Tile id="sq9" />
                    </div>
                    <div className="col s3">
                        <Tile id="sq8" />
                    </div>
                    <div className="col s3">
                        <Tile id="sq7" />
                    </div>
               </div>
             
                 
           </div>
           
        
    )

}

export default Board;