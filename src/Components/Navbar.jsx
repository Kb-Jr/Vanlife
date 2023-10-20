import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center p-3 mt-5 font-semibold w-1/2'>
        <Link to='/income'>Income</Link>
        <Link to='/reviews'>Reviews</Link>
        <Link to='/vanspage'>Vans</Link>

    </div>
  )
}

export default Navbar