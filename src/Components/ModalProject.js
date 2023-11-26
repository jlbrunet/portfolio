import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";

const ModalProject = (props) => {

  const { selectedVideo, onClick, sizeVideo } = props

  return (
    <div>
      <div onClick={onClick} className='absolute top-0 left-0 w-full h-full'></div>
      <div id="video-container" className='absolute top-[10%] left-1/2 translate-x-center animate-revealin' style={{width: `${sizeVideo}`}}>
        <div className='relative'>
          <button onClick={onClick} className='absolute top-0 right-0 text-white text-2xl opacity-50 hover:opacity-100 z-20'><IoIosCloseCircle /></button>
          <div className='z-10'>{selectedVideo}</div>
        </div>
      </div>
    </div>
  );
}

export default ModalProject;
