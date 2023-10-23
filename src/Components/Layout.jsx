import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './footer'


const Layout = () => {
  return (
    <div className='m-5 p-5 flex flex-col justify-center items-center rounded-2xl drop-shadow-md text-gray-800 bg-main-bg relative'>
        <Header />

        <Outlet />
        <Footer />

    </div>
  )
}

export default Layout