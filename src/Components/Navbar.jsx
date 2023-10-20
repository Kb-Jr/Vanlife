import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center p-3 mt-5 font-semibold w-full'>
        <Link to='/hosts'>Dashboard</Link>
        <Link to='/hosts/income'>Income</Link>
        <Link to='/hosts/reviews'>Reviews</Link>
    </div>
  )
}

export default Navbar