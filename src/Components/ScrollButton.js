import React from 'react';

const ScrollButton = (props) => {

  const { hoverColor, groupHoverColor } = props

  return (
    <div className='relative mb-5 lg:mb-10 mx-auto w-10 h-10 lg:w-12 lg:h-12 animate-bounce hover:animate-none group'>
      <button className={`flex flex-col items-center w-10 h-10 lg:w-12 lg:h-12 opacity-80 rounded-custom1 pt-1 ${hoverColor} transition duration-300`}>
        <div className="w-4 h-4 lg:w-5 lg:h-5 border-r-2 border-b-2 lg:border-r-4 lg:border-b-4 rounded-sm lg:rounded border-violet rotate-45"></div>
        <div className="w-4 h-4 lg:w-5 lg:h-5 border-r-2 border-b-2 lg:border-r-4 lg:border-b-4 rounded-sm lg:rounded border-violet rotate-45 mt-[-0.4rem] mb-[-0.2rem] lg:mt-[-0.5rem]"></div>
      </ button>
      <div className={`absolute w-5 h-5 lg:w-6 lg:h-6 rounded-custom1 opacity-80 top-[95%] left-[60%] ${groupHoverColor} transition duration-300 group-hover:delay-200`}></div>
      <div className={`absolute w-3 h-3 lg:w-4 lg:h-4 rounded-custom1 opacity-80 top-[135%] left-[80%] ${groupHoverColor} transition duration-300 group-hover:delay-300`}></div>
    </div>
   );
}

export default ScrollButton;
