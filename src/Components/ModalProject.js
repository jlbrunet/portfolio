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
    width: '95%',
    zIndex: 1000,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  if (windowWidth >= 1536 && sizeVideo.twoXl) {
    videoContainerStyle.width = `${sizeVideo.twoXl}`
  } else if (windowWidth >= 1024 && sizeVideo.lg) {
    videoContainerStyle.width = `${sizeVideo.lg}`
  } else if (windowWidth >= 768 && sizeVideo.md) {
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
      <div id="video-container" className={videoLoaded ? '' : 'hidden'} style={videoContainerStyle}>
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
