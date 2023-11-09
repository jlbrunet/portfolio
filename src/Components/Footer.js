import React from 'react';
import { AiFillHeart, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-full h-20 mt-16 text-beige bg-violet m-auto flex justify-center'>
      <div className='flex items-center mx-16'>Conçu avec <div className='mx-2'>{<AiFillHeart />}</div> par Julie Brunet</div>
      <div className='flex items-center mx-16'>
        <button className='text-3xl mx-2'><a href="https://www.linkedin.com/in/jbrunet-pro" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></button>
        <button className='text-3xl mx-2'><a href="https://github.com/jlbrunet" target="_blank" rel="noreferrer"><AiFillGithub /></a></button>
      </div>
    </div>
  );
}

export default Footer;
