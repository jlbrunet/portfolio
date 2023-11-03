import React from 'react';
import ProjectCard from './ProjectCard';
import ScrollButton from './ScrollButton';

const Projects = () => {
  return (
    <div className='flex flex-col justify-between'>
      <p className='w-full text-center text-6xl p-10 mb-10'>Mes projets</p>
      <div className='flex flex-wrap justify-around px-20'>
        <div className='basis-1/2 flex justify-center p-6'><ProjectCard linkVideo ="tbd" title="Mon Portfolio" description="tbd" languages="tdb" linkCode="tdb"/></div>
        <div className='basis-1/2 flex justify-center p-6'><ProjectCard linkVideo ="tbd" title="Paris Impro" description="tbd" languages="tdb" linkCode="tdb"/></div>
        <div className='basis-1/2 flex justify-center p-6'><ProjectCard linkVideo ="tbd" title="My Only Sub" description="tbd" languages="tdb" linkCode="tdb"/></div>
        <div className='basis-1/2 flex justify-center p-6'><ProjectCard linkVideo ="tbd" title="On Air" description="tbd" languages="tdb" linkCode="tdb"/></div>
      </div>
      <ScrollButton hoverColor="hover:bg-blueLight" groupHoverColor="group-hover:bg-blueLight"/>
    </div>
   );
}

export default Projects;
