import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import React from 'react';

import './styles/global.css'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/'  element = {<Home/>}/>
        <Route path='/rooms/' element = {<NewRoom/>}/>
      </Routes>
    </BrowserRouter>
    
    );
}

export default App;
