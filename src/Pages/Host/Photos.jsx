import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Photos = () => {

  const [data] = useOutletContext();
  return (
    <div className='m-3 p-2 w-3/4 font-bold text-2xl'>
      {
        <div className='sm-image-card'>
          <img src={data.imageUrl} />
        </div>
      }
    </div>
  )
}

export default Photos