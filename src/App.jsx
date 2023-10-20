import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Vanslist from './Pages/Vanslist'
import VansDetails from './Pages/VansDetails'
import Hosts from './Pages/Hosts'
import Income from './Pages/Income'
import Reviews from './Pages/Reviews'
import Vans from './Pages/Vans'
import Layout from './Components/Layout'
import './server'

function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vanslist />}/>
        <Route path="/vans/:id" element={<VansDetails />}/>
        <Route path="/hosts" element={<Hosts />}/>
        <Route path="/income" element={<Income />}/>
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/vanspage" element={<Vans />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
}

export default App
