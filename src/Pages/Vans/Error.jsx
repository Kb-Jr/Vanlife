import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
//   console.log(error);


  return (
    <main className='z-10 m-20 p-20 h-1'>
        <div>
            <h1 className='font-bold text-3xl'>There was an error fetching vans</h1>
        </div>
    </main>
  )
}

export default Error