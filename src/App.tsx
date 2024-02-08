import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './component/Message';
import {fetchRealtimeData,addUser} from "./service/supabase/fetchRealtimeData"; 

function App() {
  

  const [chatMs,setChatMs] = useState('');

  useEffect(()=>{
    fetchRealtimeData();
  },[]);

  const test = ()=>{
    console.log(chatMs);
  }

  return (
    <div className="App">
      <input type="text" value={chatMs} onChange={(e)=>setChatMs(e.target.value)}></input>
      <button onClick={()=>addUser("test")}>送信</button>
      <Message/>
    </div>
  );
}

export default App;

