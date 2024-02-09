import  { useState, useEffect } from 'react';
import { Routes, Route ,Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Message from './component/Message';
import {fetchRealtimeData} from "./service/supabase/fetchRealtimeData"; 
import { addMassageDB } from './service/supabase/addMassage';

import Home from './Home';
import Chat from './page/Chat';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/chat/:chatId' element={<Chat/>} />
    </Routes>
  );
}

export default App;

