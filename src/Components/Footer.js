import React from 'react';
import { AiFillHeart, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full h-20 text-beige bg-violet m-auto flex justify-center'>
      <div className='w-1/3 h-full flex items-center justify-between'>
        <div className='flex items-center mx-16'>{t("footer.conception")}<div className='mx-2'>{<AiFillHeart />}</div>{t("footer.by")}</div>
        <div className='flex mx-16'>
          <button className='text-3xl w-10 mx-2 hover:scale-125 hover:transition-all hover:duration-300 hover:ease-in-out'><a href="https://www.linkedin.com/in/jbrunet-pro" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></button>
          <button className='text-3xl w-10 mx-2 hover:scale-125 hover:transition-all hover:duration-300 hover:ease-in-out'><a href="https://github.com/jlbrunet" target="_blank" rel="noreferrer"><AiFillGithub /></a></button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
