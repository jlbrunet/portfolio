import React, { useState, useEffect } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import ProjectsData from './ProjectsData';

const ModalProject = (props) => {
  const { selectedVideo, onClick } = props
  const [videoLoaded, setVideoLoaded] = useState(false)
  const projectsData = ProjectsData()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const sizeVideo = projectsData[selectedVideo.key].videoSize[0]

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const videoContainerStyle = {
    width: '100%'
  };

  if (windowWidth >= 1536) {
    videoContainerStyle.width = `${sizeVideo.twoXl}`
  } else if (windowWidth >= 768) {
    videoContainerStyle.width = `${sizeVideo.md}`
  } else if (windowWidth <768 && sizeVideo.default) {
    videoContainerStyle.width = `${sizeVideo.default}`
  }

  const handleLoadedData = () => {
    setVideoLoaded(true)
  };

  return (
    <div>
      <div onClick={onClick} className='absolute top-0 left-0 w-full h-full'></div>
      <div id="video-container" style={videoContainerStyle} className='absolute top-[10%] left-1/2 translate-x-center animate-revealin'>
        <div className='relative'>
          <button onClick={onClick} className='absolute top-0 right-0 text-white text-2xl opacity-50 hover:opacity-100 z-20'><IoIosCloseCircle /></button>
          <div className='z-10'>
            {React.cloneElement(selectedVideo, {
              onLoadedData: handleLoadedData,
              className: videoLoaded ? '' : 'hidden'
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProject;
