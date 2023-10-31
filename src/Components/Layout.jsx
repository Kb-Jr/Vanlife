import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const Layout = () => {
  return (
    <div className='mx-auto my-auto h-full p-5 flex flex-col justify-center items-center rounded-2xl drop-shadow-md text-gray-800 bg-main-bg relative w-4/5'>
        <Header />

        <Outlet />
        <Footer />

    </div>
  )
}

export default Layout