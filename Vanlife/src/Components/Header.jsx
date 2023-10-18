import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='flex w-full justify-around m-4 font-semibold text-2xl'>
        <Link to='/'>#VANLIFE</Link>
        <Link to='/about'>About</Link>
    </div>
  )
}

export default Header