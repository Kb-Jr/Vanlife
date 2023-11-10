import React from 'react'
import { useOutletContext } from 'react-router-dom';


const Pricing = () => {

  const [data] = useOutletContext();
  return (
    <main>
      <div className='m-10 p-10 w-3/4 font-bold text-2xl'>
        {
          <h1>
            ${data.price}.00/day
          </h1>
        }
      </div>
    </main>
  )
}

export default Pricing