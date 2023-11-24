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
