import React from 'react';
import "./home.css"

const ScrollButton = (props) => {
  return (
    <div className='relative mb-10 mx-auto w-12 h-12 group'>
      <button className='flex flex-col items-center w-12 h-12 opacity-80 rounded-custom1 pt-1 animate-down hover:bg-lime hover:animate-none transition duration-300'>
        <div className="w-5 h-5 border-r-4 border-b-4 rounded border-violet rotate-45"></div>
        <div className=" w-5 h-5 border-r-4 border-b-4 rounded border-violet rotate-45 mt-[-0.5rem]"></div>
      </ button>
      <div className='absolute w-6 h-6 rounded-custom1 opacity-80 top-[95%] left-[60%] group-hover:bg-lime transition duration-300 group-hover:delay-200'></div>
      <div className='absolute w-4 h-4 rounded-custom1 opacity-80 top-[135%] left-[80%] group-hover:bg-lime transition duration-300 group-hover:delay-300'></div>
    </div>
   );
}

export default ScrollButton;
