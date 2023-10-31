import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Details = () => {
   

const [van] = useOutletContext();
  return (
     <main>
        <div>
            {van.map((item, i) => (
            <div key={i}>

                <div className='flex flex-col justify-around gap-3 font-semibold'>
                    <p>Name: {item.name}</p>
                    <p>Category: {item.type}</p>
                    <p className='flex w-2/4 text-justify'>Description {item.description}</p>
                    <p>Validity: Public</p>
                </div>
            </div>
            )
            )}
        </div>
    </main>  
  )
}

export default Details