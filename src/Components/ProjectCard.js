import React from 'react';

const ProjectCard = (props) => {

  const { linkVideo, title, description, languages, linkCode } = props

  return (
    <div className='rounded-3xl bg-purple w-[20rem] h-[35rem]'>
      <p className='w-full h-[45%] bg-white m-auto rounded-md'>{linkVideo}</p>
      <div className='w-full h-[55%] px-5 m-auto flex flex-col justify-between'>
        <div>
          <p className='text-2xl py-3'><b>{title}</b></p>
          <p className='text-justify'>{description}</p>
          <div className='flex flex-wrap py-3'>{languages.map((language, index) => {
              return <div key={index} className='mr-3 mt-2 px-2 flex items-center rounded-full border-violet border-[0.09rem] text-sm'>
                  <div className='pr-1'>{language.element}</div>
                  <div>{language.text}</div>
                </div>;
          })}</div>
        </div>
        <div className='w-32 text-center mx-auto mb-5 p-2 rounded-md bg-white'><button><a href={linkCode} target="_blank" rel="noreferrer"> Voir le code</a></button></div>
      </div>
    </div>
  );
}

export default ProjectCard;
