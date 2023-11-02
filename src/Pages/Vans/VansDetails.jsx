import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import {BiArrowBack} from 'react-icons/bi'

import '../../server'


const VansDetails = () => {
    const params = useParams();
    const [van, setVan] = useState([])
    const location = useLocation();
    const search = location.state?.search || '';

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
          .then(res => res.json())
          .then(data => setVan(data.vans)) 
          
      }, [params.id])


  return (
    <div className='m-5 p-5 flex flex-col justify-center items-center text-gray-800'>

    <div className='flex flex-wrap justify-center items-center gap-10 w-4/5 md:w-3/4'>
        <Link to={`..${search}`} relative='path'>
            <div className='flex w-full font-extrabold cursor-pointer hover:drop-shadow-lg'>
                <BiArrowBack className='mt-1'/><span className='ml-2'>Back to all vans</span>
            </div>
        </Link>
        
        <div className='flex flex-col items-center justify-around cursor-pointer hover:drop-shadow-md'>
            <div className="image-card">
                <img src={van.imageUrl} alt=""  className='image'/>
            </div>
            <h1 className='font-bold text-3xl'>{van.name}</h1>
            <p className='font-semibold text-2xl'>${van.price}/day</p>
            <button className='text-gray-50 p-2 w-1/4 rounded-lg hover:drop-shadow-lg' style={{backgroundColor: `${van.color}`}}>{van.type}</button>
            <p className='w-3/5 m-5 font-semibold text-justify'>{van.description}</p>
            <button className='text-gray-50 p-2 w-3/5 rounded-lg hover:drop-shadow-lg' style={{backgroundColor: "#FF6969"}}>Rent This Van</button>

        </div>
        
    </div>
    </div>
  )
}

export default VansDetails