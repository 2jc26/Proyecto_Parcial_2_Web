import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Encabezado from './components/header/header';
import Pie from './components/footer/footer';
import Login from './components/login/login';
import Cafes from './components/cafes/cafes';
import './App.css';

function App() {

  return (
    <div className="App">
      <Encabezado />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cafes" element={<Cafes/>} />
        </Routes>
      </BrowserRouter>
      <Pie />
    </div>
  );
}

export default App;
