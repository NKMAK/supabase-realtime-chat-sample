import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './component/Message';
import {fetchRealtimeData} from "./service/supabase/fetchRealtimeData"; 
import { addMassageDB } from './service/supabase/addMassage';

function App() {

  const [chatMs,setChatMs] = useState('');
  const [massages,setMassages] = useState([]);

  useEffect(()=>{
    fetchRealtimeData(setMassages);
  },[]);

  return (
    <div className="App">
      <input type="text" value={chatMs} onChange={(e)=>setChatMs(e.target.value)}></input>
      <button onClick={()=>addMassageDB(chatMs)}>送信</button>
      {massages.map((ms,index)=> <Message message={ms} key={index}/>)}
    </div>
  );
}

export default App;

