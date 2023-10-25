import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Details = () => {
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
            <div key={i}>

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

export default Details