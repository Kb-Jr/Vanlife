import React from 'react'
import { useEffect, useState } from 'react';

const HostVans = () => {
    const [hostVan, sethostVan] = useState([])

    
useEffect(() => {
    fetch('/api/host/vans')
    .then(response => response.json())
    .then(data => sethostVan(data.vans));
    
  
}, [])
    

return (
    <main>
        <h1 className='font-bold-500 text-2xl'>Your Listed Vans</h1> 
        <div>
            {hostVan.map((item, i) => 
            <div key={i} className='flex gap-2 rounded-xl drop-shadow-sm w-4/5'>
                <div className='sm-image-card'>
                    <img src={item.imageUrl} alt="" />
                </div>
                <div className='flex flex-col justify-around'>
                    <p className='font-bold'>{item.name}</p>
                    <p>${item.price}/day</p>
                </div>
            </div>
            )}
        </div>
    </main>  
    
)
}

export default HostVans