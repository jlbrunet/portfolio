import React from 'react';
import { AiFillHeart, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full h-14 lg:h-20 text-beige bg-violet m-auto flex justify-around md:justify-center'>
      <div className='w-full md:w-1/2 2xl:w-1/3 h-full flex items-center justify-around lg:justify-between'>
        <div className='flex text-sm items-center lg:mx-16 lg:text-base 2xl:mx-12 2xl:text-lg'>{t("footer.conception")}<div className='mx-2'>{<AiFillHeart />}</div>{t("footer.by")}</div>
        <div className='flex lg:mx-16'>
          <button className='text-2xl mx-1 lg:text-3xl lg:w-10 md:mx-2 hover:scale-125 transition-all duration-300 ease-in-out'><a href="https://www.linkedin.com/in/jbrunet-pro" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></button>
          <button className='text-2xl mx-1 lg:text-3xl lg:w-10 md:mx-2 hover:scale-125 transition-all duration-300 ease-in-out'><a href="https://github.com/jlbrunet" target="_blank" rel="noreferrer"><AiFillGithub /></a></button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
