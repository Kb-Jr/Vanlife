import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeLink = {
    color: '#f05a28',
    textDecoration: 'underline',
    fontWeight: 'bold'
  }

  return (
    <div className='flex justify-around items-center p-3 mt-5 font-semibold w-full'>
        <NavLink to='/hosts' end style={({isActive}) => isActive? activeLink : null}>Dashboard</NavLink>
        <NavLink to='income' style={({isActive}) => isActive? activeLink : null}>Income</NavLink>
        <NavLink to='hvans' style={({isActive}) => isActive? activeLink : null}>Vans</NavLink>
        <NavLink to='reviews' style={({isActive}) => isActive? activeLink : null}>Reviews</NavLink>
    </div>
  )
}


export default Navbar