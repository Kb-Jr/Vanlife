import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {

  const activeLink = 'text-red-500 font-bold underline'
  return (
    <div className='flex w-full justify-around m-4 font-semibold text-2xl'>
      <NavLink to='/'
      >#VANLIFE
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => isActive ? activeLink : ""} >
        About
      </NavLink>
      <NavLink to='/vans' className={({ isActive }) => isActive ? activeLink : ""} >
        Vans List
      </NavLink>
      <NavLink to='/hosts' className={({ isActive }) => isActive ? activeLink : ""} >
        Hosts
      </NavLink>
      <NavLink to='/login' className={({ isActive }) => isActive ? activeLink : ""} >
        Log in
      </NavLink>

    </div>
  )
}

export default Header