
import './App.css';
import React, { useState } from 'react';
import Main from './Component/Base/Main'
function App() {
  let [rand1, setRand1] = useState(0);
  let [rand2, setRand2] = useState(0);

  document.body.addEventListener('dragstart', event => {
    event.preventDefault();
  });
  function firstClick(){
    setRand1(Math.floor(Math.random() * 6) + 1);
    
  }
  function secondClick(){
    setRand2(Math.floor(Math.random() * 6) + 1);
    
  }
 
  function clickListen(){
    setRand1(Math.floor(Math.random() * 6) + 1);
    setRand2(Math.floor(Math.random() * 6) + 1);
    
  }
 
  return (
   <div className='page'>
    <div className='dices'>
  <Main onClick={firstClick} id='first' value={`${rand1}`}/>
  <Main onClick={secondClick} id='second' value={`${rand2}`}/>
  </div>
   <button onClick={clickListen}>Click</button>
   </div>  
  );
}

export default App;
