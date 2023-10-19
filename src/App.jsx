import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Vanslist from './Pages/Vanslist'
import './server'

function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/vanslist" element={<Vanslist />}/>

    </Routes>
  </BrowserRouter>
)
}

export default App
