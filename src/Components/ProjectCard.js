import React from 'react'
import { FaCirclePlay } from "react-icons/fa6"
import { useTranslation } from 'react-i18next'

const ProjectCard = (props) => {
  const { t } = useTranslation();
  const { image, videoDisplayed, title, description, languages, linkCode, onClick } = props

  return (
    <div className='rounded-3xl bg-purple w-[20rem] h-[35rem]'>
      {videoDisplayed && <div className='w-full h-[45%] relative opacity-50 hover:opacity-100'>
        <button onClick={onClick} className='absolute top-0 left-0 w-full h-full rounded-3xl'>
          <div className='absolute top-1/2 left-1/2 text-7xl bg-white rounded-full border-2 text-violet opacity-90 translate-y-center translate-x-center'><FaCirclePlay /></div>
        </button>
        {image}
      </div>}
      {!videoDisplayed && <div className='w-full h-[45%]'>
        {image}
      </div>}
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
        <a href={linkCode} target="_blank" rel="noreferrer" className='w-32 text-center mx-auto mb-5 p-2 rounded-md bg-white hover:bg-violet hover:text-white'>{t("projects.code")}</a>
      </div>
    </div>
  );
}

export default ProjectCard;
