import React from 'react'
import { useParams, Link, NavLink, Outlet, useLoaderData} from 'react-router-dom'
import { useEffect, useState } from 'react';
import {BiArrowBack} from 'react-icons/bi'
import { getHostVans } from '../../../api';

export function loader ({params}) {
    return getHostVans(params.id)
}

const HostVansDetail = () => {

    const van =  useLoaderData()


      const activeLink = {
        color: '#f05a28',
        textDecoration: 'underline',
        fontWeight: 'bold'
      }

      

  return (
    <main className='w-2/3 h-full'>
        <Link to='..' relative='path'>
            <div className='flex w-3/4 font-extrabold cursor-pointer hover:drop-shadow-lg'>
                <BiArrowBack className='mt-1'/><span className='ml-2'>Back to all vans</span>
            </div>
        </Link>
        <div>
            {van.map((item, i) => (
            <div key={i}>
            <div  className='flex gap-2 rounded-xl drop-shadow-sm w-4/5 left-0 h-full'>
                <div className='sm-image-card'>
                    <img src={item.imageUrl} alt="" />
                </div>
                <div className='flex flex-col justify-around'>
                <button className='text-gray-50 p-2 w-full rounded-lg hover:drop-shadow-lg' style={{backgroundColor: `${item.color}`}}>{item.type}</button>
                    <p className='font-bold'>{item.name}</p>
                    <p>${item.price}/day</p>
                </div>

                
            </div>
                
            <div className='flex gap-5 font-bold text-2xl'>
                {/* <NavLink to={`/hosts/hvans/${item.id}`} end style={({isActive}) => isActive? activeLink : null}>Details</NavLink> */}
                <NavLink to='.' end style={({isActive}) => isActive? activeLink : null}>Details</NavLink>
                <NavLink to='photos' style={({isActive}) => isActive? activeLink : null}>Photos</NavLink>
                <NavLink to='pricing' style={({isActive}) => isActive? activeLink : null}>Pricing</NavLink>

            </div>
            <div>
                <Outlet context={[van]} />
            </div>
            </div>
            )
            )}
        </div>
    </main>  
  )
}

export default HostVansDetail