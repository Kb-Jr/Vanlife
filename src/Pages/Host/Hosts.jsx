import React from 'react'
import Navbar from '../../Components/Navbar'
import { Outlet } from 'react-router-dom'

const Hosts = () => {
  return (
    <div className='m-5 p-5 flex flex-col justify-center items-center text-gray-80 w-3/4 h-full'>
        
        <Navbar />
        <Outlet />

    </div>
  )
}

export default Hosts