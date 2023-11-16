import {React, useState} from 'react';
import ProjectCard from './ProjectCard';
import { ProjectsData } from './ProjectsData';
import { IoIosCloseCircle } from "react-icons/io";

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleCardClick = (video) => {
    setSelectedVideo(video);
    const projectContainer = document.getElementById("projects-container")
    projectContainer.classList.add("blur-sm")
  }

  const closeVideo = () => {
    const videoContainer = document.getElementById("video-container")
    videoContainer.classList.add("animate-revealout")
    setTimeout(() => {
      const projectContainer = document.getElementById("projects-container")
      projectContainer.classList.remove("blur-sm")
    }, 500);
    setTimeout(() => {
      setSelectedVideo(null)
    }, 900);
  }

  return (
    <div id="projects" className='h-screen relative'>
      <div className='flex flex-col' id="projects-container">
        <p className='w-full text-center text-6xl p-10'>Mes projets</p>
        <div className='flex flex-wrap justify-around px-20'>
          {ProjectsData.map((data) => {
            return(<div className='flex flex-wrap p-6' key={data.id}>
              <ProjectCard
                image={data.image}
                video={data.video}
                title={data.title}
                description={data.description}
                languages={data.languages}
                linkCode={data.linkCode}
                onClick={() => handleCardClick(data.video)}
              />
            </div>)
          })}
        </div>
      </div>
      {selectedVideo && (
        <div>
          <div onClick={closeVideo} className='absolute top-0 left-0 w-full h-full'></div>
          <div id="video-container" className='absolute top-[10%] left-1/2 translate-x-center animate-revealin w-[1200px]'>
            <div className='relative'>
              <button onClick={closeVideo} className='absolute top-0 right-0 text-white text-2xl opacity-75 hover:opacity-100 z-20'><IoIosCloseCircle /></button>
              <div className='z-10'>{selectedVideo}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
