import React, { Suspense } from 'react'
import { useParams, Link, useLocation, useLoaderData, defer, Await } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

import '../../server'
import { getVan } from '../../../api';

export const loader = ({ params }) => {
    return defer({ data: getVan(params.id) })
}

const VansDetails = () => {
    const dataPromise = useLoaderData();
    const location = useLocation();
    const search = location.state?.search || '';
    const type = location.state?.type || 'all';

    const renderVandetails = (data) => {

        const VansDetailsEls = <>
            <div className='m-5 p-5 flex flex-col justify-center items-center text-gray-800'>

                <div className='flex flex-wrap justify-center items-center gap-10 w-4/5 md:w-3/4'>
                    <Link to={`..${search}`} relative='path'>

                        <div className='flex w-full font-extrabold cursor-pointer hover:drop-shadow-lg'>
                            <BiArrowBack className='mt-1' /><span className='ml-2'>Back to {type} vans</span>
                        </div>
                    </Link>

                    <div className='flex flex-col items-center justify-around cursor-pointer hover:drop-shadow-md'>
                        <div className="image-card">
                            <img src={data.imageUrl} alt="" className='image' />
                        </div>
                        <h1 className='font-bold text-3xl'>{data.name}</h1>
                        <p className='font-semibold text-2xl'>${data.price}/day</p>
                        <button className='text-gray-50 p-2 w-1/4 rounded-lg hover:drop-shadow-lg' style={{ backgroundColor: `${data.color}` }}>{data.type}</button>
                        <p className='w-3/5 m-5 font-semibold text-justify'>{data.description}</p>
                        <button className='text-gray-50 p-2 w-3/5 rounded-lg hover:drop-shadow-lg' style={{ backgroundColor: "#FF6969" }}>Rent This Van</button>

                    </div>

                </div>
            </div>
        </>

        return (
            [VansDetailsEls]
        )
    }

    return (
        <Suspense fallback={<h1 className='m-20 p-20 font-bold text-3xl'>Loading Details....</h1>}>
            <Await resolve={dataPromise.data}>
                {renderVandetails}
            </Await>
        </Suspense>
    )
}

export default VansDetails