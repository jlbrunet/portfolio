import React from 'react';
import PotatoForm from './PotatoForm';

const Background = () => {
  return (
    <div className="relative w-full h-full bg-beige z-minus1 flex items-center">
      <div className='absolute' style={{left: '10%', transform: 'translateY(-15%)'}}>
        <PotatoForm maxWidth="28" maxHeight="28" color="bg-lime" opacity="opacity-80" borderRadius="30% 60% 60% 40% / 70% 50% 50% 30%"/>
      </div>
      <div className='absolute' style={{left: '25%', transform: 'translateY(20%)'}}>
        <PotatoForm maxWidth="32" maxHeight="24" color="bg-purple" opacity="opacity-40" borderRadius="40% 50% 70% 30% / 70% 60% 50% 30%"/>
      </div>
      <div className='absolute' style={{left: '65%', transform: 'translateY(-30%)'}}>
        <PotatoForm maxWidth="24" maxHeight="24" color="bg-blue" opacity="opacity-40" borderRadius="50% 40% 60% 40% / 70% 70% 60% 40%"/>
      </div>
    </div>
  );
}

export default Background;
