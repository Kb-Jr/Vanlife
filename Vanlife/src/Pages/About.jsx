import React from 'react';
import Header from '../Components/Header';

const About = () => {
  return (
    <div className='m-5 p-5 flex flex-col justify-center items-center rounded-2xl drop-shadow-md text-gray-800 bg-main-bg'>
          <Header />
          <div className='gap-3 flex-col justify-around items-center'>
              <div className='m-20 font-bold text-5xl'>
                <p>About VanLife!!</p>
              </div>
              
              <div className='m-20 font-semibold text-3xl'>
                  <p>Don't Squeeze in a Sedan when you can relax in a van</p>
              </div>

              <div className='m-20'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quaerat nam perferendis vel aut tenetur cum magni adipisci in dolorum, voluptate, quibusdam ut nostrum numquam, nisi nemo odio quo possimus.
                Quae iste, quaerat atque magni blanditiis totam dolorum voluptate, impedit expedita deserunt natus numquam repellat at. Sequi maiores nobis, neque iusto dolorem unde voluptatem nulla illum voluptatum itaque optio suscipit?</p>
              </div>
            
          </div>
      </div>
  )
}

export default About;