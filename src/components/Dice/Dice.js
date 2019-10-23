import React from 'react';

function Roll() {
    let randomSpace = Math.floor(Math.random() * 6) + 1;
  function sayHello() {
    alert(randomSpace);
  }
  
  return (
    <button onClick={sayHello}>
      Roll
    </button>
  );
}

export default Roll;