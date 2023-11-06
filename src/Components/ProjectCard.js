import React from 'react';

const ProjectCard = (props) => {

  const { linkVideo, title, description, languages, linkCode } = props

  return (
    <div className='rounded-3xl bg-purple w-[20rem] h-[30rem]'>
      <p className='w-full h-[45%] bg-white m-auto rounded-md'>{linkVideo}</p>
      <div className='w-full px-5 py-1 m-auto bg-black'>
        <p className='text-center text-2xl p-1'><b>{title}</b></p>
        <p className=''>{description}</p>
        <div className=''>{languages.map((language, index) => {
          if (typeof language === 'string') {
            return <img key={index} src={language} width="20px" alt={language} />;
          } else {
            return <div key={index}>{language}</div>;
          }
        })}</div>
        <div className='text-center'><button><a href={linkCode} target="_blank" rel="noreferrer"> Voir le code</a></button></div>
      </div>
    </div>
  );
}

export default ProjectCard;
