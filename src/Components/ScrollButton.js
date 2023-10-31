import React from 'react';
import "./home.css"

const ScrollButton = (props) => {
  return (
    <div>
      <button className='m-12 animate-down scroll-button'>
          <div className='flex flex-col justify-between items-center rounded-full pb-6 pr-4 pl-4'>
            <div className="w-6 h-6 border-r-4 border-b-4 rounded border-violet rotate-45"></div>
            <div className="m-[-10px] w-6 h-6 border-r-4 border-b-4 rounded border-violet rotate-45"></div>
          </div>
          <div className='absolute top-12 left-12 bubble'></div>
          <div className='absolute top-16 left-16 small-bubble'></div>
      </button>
    </div>
   );
}

export default ScrollButton;
