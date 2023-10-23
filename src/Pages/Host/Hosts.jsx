import React from 'react'
import Navbar from '../../Components/Navbar'
import { Outlet } from 'react-router-dom'

const Hosts = () => {
  return (
    <div className='m-5 p-5 flex flex-col justify-center items-center rounded-2xl drop-shadow-md text-gray-800 bg-main-bg'>
        
        <Navbar />
        <Outlet />

    </div>
  )
}

export default Hosts