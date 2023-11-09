import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import '../../server'
import { getHostVans } from '../../../api';
import { requireAuth } from '../../utils';

export async function loader ({request}) {
    await requireAuth(request)
    return getHostVans();
}

const HostVans = () => {
    const hostVan = useLoaderData();


const hostVansEls = hostVan.map((item, i) =>      
            (
            <Link to={item.id} key={i}>
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
        )

return (
    <main>
        <h1 className='font-bold text-3xl'>Your Listed Vans</h1>   
                <div>{hostVansEls}</div>
       </main>  
    
)
}

export default HostVans