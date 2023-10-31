import React from 'react'
import '../../server'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'


const Vanslist = () => {

    const [searchParams, setSetParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    
    
    const [vans, setVans] = useState([]);
    useEffect(() => {
        fetch("/api/vans")
          .then((response) => response.json())
          .then((data) => setVans(data.vans)) 
          
      }, [])


      const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter)  : vans;

  return (
    <div className='m-5 p-5 flex flex-col justify-center items-center text-gray-800 w-full'>
          
          <div className='m-3'>
              <h1 className='font-bold text-3xl'>All Vans</h1>        
          </div>
        <div className='flex flex-wrap items-center w-full md:w-3/4 justify-around'>
            {displayedVans.map((van, i) => (
                <Link to={`/vans/${van.id}`} key={i}>
                    <div className='flex flex-col items-center justify-around cursor-pointer hover:drop-shadow-md mb-5'>
                        <div className="image-card">
                            <img src={van.imageUrl} alt=""  className='image'/>
                        </div>
                        <h1 className='font-bold text-2xl'>{van.name}</h1>
                        <p className='font-semibold'>${van.price}/day</p>
                        <button className='text-gray-50 p-2 w-1/3 rounded-lg hover:drop-shadow-lg' style={{backgroundColor: `${van.color}`}}>{van.type}</button>
                    </div>
                </Link>
            ))}
        </div>
      </div>
  )
}

export default Vanslist