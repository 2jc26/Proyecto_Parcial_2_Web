import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Encabezado from './components/header/header';
import Pie from './components/footer/footer';
import Login from './components/login/login';
import Cafes from './components/cafes/cafes';
import './App.css';

function App() {

  const [rol, setRol] = useState('');

  return (
    <div className="App">
      <Encabezado />
      {/* <Route path="/" element={<Login setRol={setRol} />} /> */}
      <BrowserRouter>
        <Routes>
          {/* {!rol ? (
            <Route path="/" element={<Cafes />} />
          ) :
            (
              <Route path="/login" element={<Login setRol={setRol} />} />
            )
          } */}
          <Route path="/" element={<Cafes />} />
        </Routes>
      </BrowserRouter>
      <Pie />
    </div>
  );
}

export default App;
