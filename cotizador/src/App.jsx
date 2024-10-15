/* eslint-disable no-unused-vars */
import './App.css'
import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [cantidad, setCantidad] = useState(0)
  const [plazo, setPlazo] = useState("")
  
  
  return (
    <>
      <Header titulo="Cotizador de prestamos..." />
      <div className="container">
          <Form 
          cantidad={cantidad} 
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo} 
          />
      </div>
    </>
  )
}

export default App
