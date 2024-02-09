import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import Message from '../component/Message';
import {fetchRealtimeData} from "../service/supabase/fetchRealtimeData"; 
import { addMassageDB } from '../service/supabase/addMassage';

export default function Chat() {
    const { chatId } = useParams();
    console.log(chatId);

  const [chatMs,setChatMs] = useState('');
  const [massages,setMassages] = useState([]);

  useEffect(()=>{
    fetchRealtimeData(setMassages,chatId);
  },[]);

  return (
    <div className="App">
      <input type="text" value={chatMs} onChange={(e)=>setChatMs(e.target.value)}></input>
      <button onClick={()=>addMassageDB(chatMs,chatId)}>送信</button>
      {massages.map((ms,index)=> <Message message={ms} key={index}/>)}
    </div>
  );
}

