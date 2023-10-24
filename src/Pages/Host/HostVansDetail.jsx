import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const HostVansDetail = () => {

    const params = useParams();
    const [van, setVan] = useState([])

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
          .then(res => res.json())
          .then(data => setVan(data.vans)) 
          
      }, [params.id])

  return (
    <main>
        <div>
            {van.map((item, i) => (
            <div>
            <div key={i} className='flex gap-2 rounded-xl drop-shadow-sm w-4/5'>
                <div className='sm-image-card'>
                    <img src={item.imageUrl} alt="" />
                </div>
                <div className='flex flex-col justify-around'>
                <button className='text-gray-50 p-2 w-full rounded-lg hover:drop-shadow-lg' style={{backgroundColor: `${item.color}`}}>{item.type}</button>
                    <p className='font-bold'>{item.name}</p>
                    <p>${item.price}/day</p>
                </div>

                
            </div>
                <div className='flex items-center justify-between'>
                        <p>Details</p>
                        <p>Pricing</p>
                        <p>Photos</p>
                </div>
                <div className='flex flex-col justify-around font-semibold'>
                    <p>Name: {item.name}</p>
                    <p>Category: {item.type}</p>
                    <p className='flex flex-wrap'>Description: {item.description}</p>
                    <p>Validity: Public</p>
                </div>
            </div>
            )
            )}
        </div>
    </main>  
  )
}

export default HostVansDetail