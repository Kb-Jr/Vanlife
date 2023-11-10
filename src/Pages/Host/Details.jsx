import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Details = () => {


    const [data] = useOutletContext();
    return (
        <main>
            <div>
                {
                    <div>

                        <div className='flex flex-col justify-around gap-3 font-semibold'>
                            <p>Name: {data.name}</p>
                            <p>Category: {data.type}</p>
                            <p className='flex w-full text-justify'>Description {data.description}</p>
                            <p>Validity: Public</p>
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}

export default Details