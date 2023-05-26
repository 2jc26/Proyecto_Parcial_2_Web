import React from 'react';
import './App.css';
import Encabezado from './components/header/header';
import Pie from './components/footer/footer';
import Login from './components/login/login';
import Cafes from './components/cafes/cafes';
import Cafe from './components/cafe/cafe';
import { Routes, Route } from "react-router-dom";
const { useEffect, useState } = require("react");

function App() {

  const [rol, setRol] = useState('');
  const [id, setId] = useState('');

  return (
    <div className='App'>
      <Encabezado/>
      {/* <Login/> */}
      <Cafes />
      <Routes>
         <Route path="/" element={<Cafes setId={setId}/>} />
         <Route path="/cafes" element={<Cafes setId={setId}/>} />
         <Route path="/cafes/:cafeId" element={<Cafe id={id}/>} />
       </Routes>
      <Pie/>
    </div>
  );
}

export default App;
