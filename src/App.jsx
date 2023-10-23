import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Vanslist from './Pages/Vans/Vanslist'
import VansDetails from './Pages/Vans/VansDetails'
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import Dashboard from './Pages/Host/Dashboard'
import Layout from './Components/Layout'
import Hosts from './Pages/Host/Hosts'
import './server'

function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="vans" element={<Vanslist />}/>
        <Route path="vans/:id" element={<VansDetails />}/>

        <Route path='hosts' element={<Hosts />}>
          <Route index element={< Dashboard/>} />
          <Route path="income" element={<Income />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
}

export default App
