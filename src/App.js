import './App.css';
import { useState } from 'react';


function App() {

  const [number, setnumber]= useState(Math.floor(Math.random()*100)+1)

  function randomNumber(){
    setnumber(Math.floor(Math.random()*100)+1)
  }

  return (
    <div className="App">
      <div className="App-header">
        <span>{number}</span>
        <button onClick={randomNumber} className="newNumber">Criar novo número</button>
      </div>
    </div>
  );
}

export default App;
