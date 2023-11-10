import React, { Suspense } from 'react'
import { useParams, Link, NavLink, Outlet, useLoaderData, defer, Await } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { getHostVans } from '../../../api';
import { requireAuth } from '../../utils';


export async function loader({ params, request }) {
    await requireAuth(request)
    return defer({ data: getHostVans(params.id) })
}

const HostVansDetail = () => {

    const dataPromise = useLoaderData()


    const activeLink = {
        color: '#f05a28',
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

    function renderHostVanDetails(data) {


        const HostVanDetailsEl = <>
            <main className='w-2/3 h-full'>
                <Link to='..' relative='path'>
                    <div className='flex w-3/4 font-extrabold cursor-pointer hover:drop-shadow-lg'>
                        <BiArrowBack className='mt-1' /><span className='ml-2'>Back to all vans</span>
                    </div>
                </Link>
                <div>
                    {

                        <div>
                            <div className='flex gap-2 rounded-xl drop-shadow-sm w-4/5 left-0 h-full'>
                                <div className='sm-image-card'>
                                    <img src={data.imageUrl} alt="" />
                                </div>
                                <div className='flex flex-col justify-around'>
                                    <button className='text-gray-50 p-2 w-full rounded-lg hover:drop-shadow-lg' style={{ backgroundColor: `${data.color}` }}>{data.type}</button>
                                    <p className='font-bold'>{data.name}</p>
                                    <p>${data.price}/day</p>
                                </div>


                            </div>

                            <div className='flex gap-5 font-bold text-2xl'>
                                {/* <NavLink to={`/hosts/hvans/${item.id}`} end style={({isActive}) => isActive? activeLink : null}>Details</NavLink> */}
                                <NavLink to='.' end style={({ isActive }) => isActive ? activeLink : null}>Details</NavLink>
                                <NavLink to='photos' style={({ isActive }) => isActive ? activeLink : null}>Photos</NavLink>
                                <NavLink to='pricing' style={({ isActive }) => isActive ? activeLink : null}>Pricing</NavLink>

                            </div>
                            <div>
                                <Outlet context={[data]} />
                            </div>
                        </div>

                    }
                </div>
            </main>
        </>

        return (
            [HostVanDetailsEl]
        )
    }


    return (
        <Suspense fallback={<h1 className='m-20 p-20 font-bold text-3xl'>Loading Your Van detail....</h1>}>
            <Await resolve={dataPromise.data}>
                {renderHostVanDetails}
            </Await>
        </Suspense>
    )
}

export default HostVansDetail