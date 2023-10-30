import React from 'react';
import PotatoForm from './PotatoForm';

const Background = () => {
  return (
    <div className="fixed w-full h-full bg-blue z-minus1 flex items-center">
      <div className='absolute' style={{left: '15%', transform: 'translateY(-10%)'}}>
        <PotatoForm maxWidth="28" maxHeight="28" color="bg-lime" borderRadius="30% 60% 60% 40% / 70% 50% 50% 30%"/>
      </div>
      <div className='absolute' style={{left: '30%', transform: 'translateY(30%)'}}>
        <PotatoForm maxWidth="32" maxHeight="24" color="bg-purple" borderRadius="40% 50% 70% 30% / 70% 60% 50% 30%"/>
      </div>
      <div className='absolute' style={{left: '65%', transform: 'translateY(-90%)'}}>
        <PotatoForm maxWidth="18" maxHeight="12" color="bg-green" borderRadius="50% 40% 60% 40% / 70% 70% 60% 40%"/>
      </div>
    </div>
  );
}

export default Background;
