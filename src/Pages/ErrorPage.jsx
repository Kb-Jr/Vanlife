import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <main className='flex-col justify-around items-center w-3/4 h-3/4'>
      <div className='m-10'>
        <p className='font-bold text-4xl'>Ooops, seems like the page you were looking for was not found!</p>

      </div>

      <div className='flex items-center justify-center'>
        <Link to='..' relative='path' className='text-white hover:drop-shadow-lg w-1/3 h-20 bg-gray-800 rounded-lg mx-auto my-10 border text-center py-6'>
          Return to home
        </Link>

      </div>

    </main>
  )
}

export default ErrorPage