import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectsData } from './ProjectsData';
import Footer from './Footer';

const Projects = () => {
  return (
    <div id="projects">
      <div className='flex flex-col justify-between'>
        <p className='w-full text-center text-6xl p-10 mb-10'>Mes projets</p>
        <div className='flex flex-wrap justify-around px-20'>
          {ProjectsData.map((data) => {
            return(<div className='basis-1/2 flex justify-center p-6' key={data.id}>
              <ProjectCard
                linkVideo={data.linkVideo}
                title={data.title}
                description={data.description}
                languages={data.languages}
                linkCode={data.linkCode}/>
            </div>)
          })}
        </div>
      </div>
      <Footer />
    </div>
   );
}

export default Projects;
