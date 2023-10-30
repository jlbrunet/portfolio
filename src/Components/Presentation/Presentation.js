import React from 'react';
import "./Presentation.css"

const Presentation = () => {
  return (
    <div className='w-full h-full text-grey flex flex-col justify-between'>
      <div className='text-2xl font-semibold mr-2 flex justify-end'>
        <button className='m-3' style={{textShadow: '1px 1px 0 white'}}>FR</button>
        <button className='m-3' style={{textShadow: '1px 1px 0 white'}}>EN</button>
      </div>
      <div className='text-center font-semibold' style={{textShadow: '4px 4px 0 white'}}>
        <p className='mb-5 text-9xl'>Salut, moi c'est Julie !</p>
        <p className='text-7xl'>Développeuse Web Fullstack</p>
      </div>
        <div className='mb-12 flex justify-center'>
          <button className='relative scroll-button'>
            <div className='flex flex-col justify-between items-center rounded-full pb-6 pr-4 pl-4'>
              <div className="w-6 h-6 border-r-4 border-b-4 border-grey rotate-45"></div>
              <div className="m-[-10px] w-6 h-6 border-r-4 border-b-4 border-grey rotate-45"></div>
            </div>
            <div className='absolute top-12 left-12 bubble'></div>
            <div className='absolute top-16 left-16 small-bubble'></div>
          </button>
        </div>
    </div>
  );
}

export default Presentation;
