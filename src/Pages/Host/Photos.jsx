import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Photos = () => {

  const [van, setVan] = useOutletContext();
  return (
    <div className='m-10 p-5 w-3/4 font-bold text-2xl'>
    {van.map((item, i) => (
    <div key={i} className='sm-image-card'>
      <img src={item.imageUrl} />
    </div>
    )
    )}
</div>
  )
}

export default Photos