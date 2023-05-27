import React from 'react';
import './App.css';
import Encabezado from './components/header/header';
import Pie from './components/footer/footer';
import Login from './components/login/login';
import Cafes from './components/cafes/cafes';
import Cafe from './components/cafe/cafe';
import { Routes, Route } from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
const { useState } = require("react");

function App() {

  const [rol, setRol] = useState('');
  const [CafeDetail, setCafeDetail] = useState({});
  console.log(CafeDetail)
  return (
    <div className='App'>
      <Encabezado />
      {/* <Login setRol={setRol}/> */}
      <Row>
        <Col lg="8">
          <Cafes setCafeDetail={setCafeDetail} />
        </Col>
        {CafeDetail.length>0 ? (
          <Col>
            <Cafe cafe={CafeDetail[0]} />
          </Col>
        ) :
          (
            <Col></Col>
          )
        }
      </Row>
      <Pie />
    </div >
  );
}

export default App;
