import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [chatMs,setChatMs] = useState('');

  const test = ()=>{
    console.log(chatMs);
  }

  return (
    <div className="App">
      <input type="text" value={chatMs} onChange={(e)=>setChatMs(e.target.value)}></input>
      <button onClick={test}>送信</button>
    </div>
  );
}

export default App;
