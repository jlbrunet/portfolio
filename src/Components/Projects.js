import {React, useState} from 'react';
import ProjectCard from './ProjectCard';
import { ProjectsData } from './ProjectsData';
import ModalProject from './ModalProject';

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleCardClick = (video) => {
    setSelectedVideo(video);
    const projectContainer = document.getElementById("projects-container")
    projectContainer.classList.add("blur-sm", "pointer-events-none")
  }

  const closeVideo = () => {
    const videoContainer = document.getElementById("video-container")
    videoContainer.classList.add("animate-revealout")
    const projectContainer = document.getElementById("projects-container")
    projectContainer.classList.remove("blur-sm", "pointer-events-none")
    setSelectedVideo(null)
  }

  return (
    <div id="projects" className='min-h-screen relative'>
      <div className='min-h-screen flex flex-col justify-around' id="projects-container">
        <div className='text-center text-6xl p-20 relative'>
          <div className='absolute top-0 left-1/2 translate-x-center h-full w-96 bg-purple rounded-custom2'></div>
          <p className='h-full absolute top-0 left-1/2 translate-x-center flex items-center'>Mes projets</p>
        </div>
        <div className='flex flex-wrap justify-around'>
          {ProjectsData.map((data) => {
            return(<div className='flex flex-wrap p-6' key={data.id}>
              <ProjectCard
                image={data.image}
                videoDisplayed={data.videoDisplayed}
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
      {selectedVideo &&
        <ModalProject
        onClick={() => closeVideo()}
        selectedVideo={selectedVideo}
        sizeVideo={selectedVideo.props.width}
        />
      }
    </div>
  );
}

export default Projects;
