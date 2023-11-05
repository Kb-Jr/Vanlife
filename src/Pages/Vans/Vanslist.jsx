import React from 'react'
import '../../server'
import { useEffect, useState } from 'react'
import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getVans } from '../../../api'
import { data } from 'autoprefixer'

export function loader() {
    return getVans();
    
}

const Vanslist = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    const vans = useLoaderData();


      const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter)  : vans;

      const handleFilterChange = (key, value) => {
        setSearchParams(
            prevParams => {
                if(value === null){
                    prevParams.delete(key)
                } else {
                    prevParams.set(key, value)
                }
                return prevParams
            }
        )
      }

    const vanslistEls = <div className='m-5 p-5 flex flex-col justify-center items-center text-gray-800 w-full'>
            
    <div className='m-3'>
        <h1 className='font-bold text-3xl'>Explore our Van Options</h1>        
    </div>
    <div className='flex justify-around items-center gap-3 w-2/4 md:w-full'>
        <button className='w-1/5 rounded-md bg-green-500 text-white hover:drop-shadow-md text-center'
            onClick={() => handleFilterChange("type", "simple")}
        >Simple</button>

        <button className='w-1/5 rounded-md bg-sky-900 text-white hover:drop-shadow-md text-center'
            onClick={() => handleFilterChange("type", "luxury")}>
        Luxury</button>

        <button className='w-1/5 rounded-md bg-red-500  text-white hover:drop-shadow-md text-center'
            onClick={() => handleFilterChange("type", "rugged")}
        >Rugged</button>
        
        { typeFilter ? (
            <button className='w-1/5 rounded-md bg-gray-700  text-white hover:drop-shadow-md text-center'
            onClick={() => handleFilterChange("type", null)}
            >Clear
            </button> ) : null
        }
    </div>

    <div className='flex flex-wrap items-center w-full md:w-3/4 justify-around'>
        {displayedVans.map((van, i) => (
            <Link to={van.id} key={i} state={{search:`?${searchParams.toString()}`, type: typeFilter}}>
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
    
return (
        <main>
            {
               vanslistEls
            }
        </main>
        
    )
}

export default Vanslist