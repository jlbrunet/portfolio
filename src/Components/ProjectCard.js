import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrands } from '@fortawesome/free-solid-svg-icons'
import { faSquareJs } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = (props) => {

  const { linkVideo, title, description, languages, linkCode } = props

  return (
    <div className='rounded-3xl bg-purple w-[20rem] h-[30rem]'>
      <p className='w-full h-[45%] bg-white m-auto rounded-md'>{linkVideo}</p>
      <div className='w-full px-5 py-1 m-auto bg-black'>
        <p className='text-center text-2xl p-1'><b>{title}</b></p>
        <p className=''>{description}</p>
        <p className=''>{languages}</p>
        <div className='text-center'><button>{linkCode}</button></div>
      </div>
    </div>
  );
}

export default ProjectCard;
