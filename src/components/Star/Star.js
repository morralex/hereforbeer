import React from "react";

let randomSpace = Math.floor(Math.random() * 6) + 1;
let newID = "sq"+randomSpace;

class Star extends React.Component {
    
    render () {
      const newElement = document.createElement('div');
      newElement.innerText = 'STAR';
  
      return (
        <div id=newID ref={node => node.appendChild(newElement)}></div>
      )
    }
  }

export default Star;
