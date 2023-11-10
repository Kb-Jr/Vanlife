import React, {Suspense} from 'react'
import { Link, useLoaderData,defer, Await } from 'react-router-dom';
import '../../server'
import { getHostVans } from '../../../api';
import { requireAuth } from '../../utils';

export async function loader ({request}) {
    await requireAuth(request)
    return defer({data:getHostVans()})
}

const HostVans = () => {
    const dataPromise = useLoaderData();
    console.log(dataPromise)

function renderHostVan(data){
    
        const hostvans = data
        console.log(hostvans)
        const hostvansEls =
        <>
        {hostvans.map((item, i) =>      
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

    }
    </>

return (
    <main>
    <h1 className='font-bold text-3xl'>Your Listed Vans</h1>   
    {hostvansEls}
    </main>

)
}

 
return (
    <Suspense fallback={<h1 className='m-20 p-20 font-bold text-3xl'>Loading Your Vans....</h1>}>
        <Await resolve={dataPromise.data}>
                {renderHostVan}
        </Await> 
    </Suspense>
)
}

export default HostVans