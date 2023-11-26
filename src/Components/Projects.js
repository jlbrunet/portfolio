import {React, useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectsData from './ProjectsData'
import ModalProject from './ModalProject'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const projectsDataArray = ProjectsData();
  const { t } = useTranslation();
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
      <div className='min-h-screen flex flex-col justify-around 2xl:px-60 ' id="projects-container">
        <div className='text-center p-10 lg:p-16 2xl:p-20 relative'>
          <div className='absolute top-0 left-1/2 translate-x-center h-full w-72 md:w-96 bg-purple rounded-custom2'></div>
          <p className='w-full font-semibold md:font-medium text-4xl lg:text-5xl 2xl:text-6xl h-full absolute top-0 left-1/2 translate-x-center flex items-center justify-center'>{t('projects.header')}</p>
        </div>
        <div className='flex flex-wrap justify-around'>
          {projectsDataArray.map((data) => {
            return(<div className='flex flex-wrap p-12 md:p-6' key={data.id}>
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
