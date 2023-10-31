import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../server'

const HostVans = () => {
    const [hostVan, sethostVan] = useState([])

    
useEffect(() => {
    fetch('/api/host/vans')
    .then(response => response.json())
    .then(data => sethostVan(data.vans));
    
  
}, [])


return (
    <main>
        <h1 className='font-bold text-3xl'>Your Listed Vans</h1> 
        <div>
            {hostVan.map((item, i) =>      
            (
            <Link to={`/hosts/hvans/${item.id}`} key={i}>
            <div  className='flex gap-2 rounded-xl drop-shadow-sm w-full cursor-pointer'>
                <div className='sm-image-card'>
                    <img src={item.imageUrl} alt="" />
                </div>
                <div className='flex flex-col justify-around'>
                    <p className='font-bold'>{item.name}</p>
                    <p>${item.price}/day</p>
                </div>
            </div>
            </Link>
            )
            )}
        </div>
    </main>  
    
)
}

export default HostVans