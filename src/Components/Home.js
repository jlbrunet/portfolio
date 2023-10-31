import React from 'react';
import ScrollButton from './ScrollButton';


const Home = () => {
  return (
    <div className='h-screen'>
      {/* Background */}
      <div>
        <div className='absolute left-[10%] top-[15%] w-[25%] h-[50%] bg-lime opacity-80 rounded-custom1'></div>
        <div className='absolute left-[25%] top-[45%] w-[30%] h-[45%] bg-purple opacity-20 rounded-custom2'></div>
        <div className='absolute left-[70%] top-[15%] w-[20%] h-[40%] bg-blue opacity-40 rounded-custom3'></div>
      </div>
      {/* Content */}
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between text-center font-semibold'>
        <div className='text-2xl flex justify-end'>
          <button>FR</button>
          <button className='my-4 mx-6'>EN</button>
        </div>
        <div>
          <p className='mb-8 text-9xl'>Salut, moi c'est Julie</p>
          <p className='text-7xl'>Développeuse Web Fullstack</p>
        </div>
        <ScrollButton />
      </div>
    </div>
  );
}

export default Home;
