import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Loja from '../../Pages/Loja/Loja'
import Torneio from '../../Pages/Torneio/Torneio'

function Rotas() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/loja' element={<Loja />} />
      <Route path='/torneio' element={<Torneio />} />
    </Routes>
  )
}

export default Rotas