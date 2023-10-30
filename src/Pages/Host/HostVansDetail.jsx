import React from 'react'
import { useParams, NavLink, Outlet, useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react';
import {BiArrowBack} from 'react-icons/bi'



const HostVansDetail = () => {

    const params = useParams();
    const [van, setVan] = useState([])

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
          .then(res => res.json())
          .then(data => setVan(data.vans)) 
          
      }, [params.id])

      const activeLink = {
        color: '#f05a28',
        textDecoration: 'underline',
        fontWeight: 'bold'
      }

  return (
    <main>
        <NavLink to='hvans'>
            <div className='flex w-3/4 font-extrabold cursor-pointer hover:drop-shadow-lg'>
                <span><BiArrowBack />Back to all vans</span>
            </div>
        </NavLink>
        <div>
            {van.map((item, i) => (
            <div key={i}>
            <div  className='flex gap-2 rounded-xl drop-shadow-sm w-4/5'>
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

                <Outlet context={[van, setVan]} />
            </div>
            )
            )}
        </div>
    </main>  
  )
}

export default HostVansDetail