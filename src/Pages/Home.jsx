import React from 'react'
import Button from '../Components/Button'

const Home = () => {
  return (

      <div className='m-5 p-5 flex flex-col justify-center items-center text-gray-800 h-full'>
          
          <div className='gap-3 flex-col justify-around items-center'>
              <div className='m-20 font-bold text-5xl'>
                <p>Welcome to VanLife!!</p>
              </div>
              
              <div className='m-20 font-semibold text-3xl'>
                  <p>Add an Adventure to your life by joining Vanlife</p>
              </div>

              <div className='m-20'>
                <Button bgColor="#333" text="Find Your van" borderRadius="10px" color="white" size="md" />
              </div>
            
          </div>
      </div>
  )
}

export default Home