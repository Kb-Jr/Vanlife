import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Vanslist from './Pages/Vanslist'
import VansDetails from './Pages/VansDetails'
import './server'

function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/vans" element={<Vanslist />}/>
      <Route path="/vans/:id" element={<VansDetails />}/>

    </Routes>
  </BrowserRouter>
)
}

export default App
