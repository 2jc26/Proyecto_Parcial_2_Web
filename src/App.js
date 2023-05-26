import React from 'react';
import './App.css';
import Encabezado from './components/header/header';
import Pie from './components/footer/footer';
import Login from './components/login/login';
import Cafes from './components/cafes/cafes';
import Cafe from './components/cafe/cafe';
import { Routes, Route } from "react-router-dom";
const { useState } = require("react");

function App() {

  const [rol, setRol] = useState('');
  const [CafeDetail, setCafeDetail] = useState('');

  return (
    <div className='App'>
      <Encabezado/>
      {/* <Login/> */}
         <Cafes setCafeDetail={setCafeDetail}/>
         {/* <Cafe prop={CafeDetail}/> */}
      <Pie/>
    </div>
  );
}

export default App;
