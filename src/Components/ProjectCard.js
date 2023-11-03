import React from 'react';

const ProjectCard = (props) => {

  const { linkVideo, title, description, languages, linkCode } = props

  return (
    <div className='rounded-custom5 bg-purple w-96 h-[30rem] p-5'>
      <p className='w-4/5 h-2/5 bg-black m-auto'>{linkVideo}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{languages}</p>
      <p>{linkCode}</p>
    </div>
  );
}

export default ProjectCard;
