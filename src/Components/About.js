import { React, useState } from 'react';
import profilePicture from '../assets/profilePicture.jpg'
import Spark from './Spark'
import ScrollButton from './ScrollButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';
import ClipboardJS from 'clipboard';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const emailAddress = 'juliebrunet.pro@outlook.fr';

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsCopied(false)
  };

  const handleButtonClick = () => {
    const clipboard = new ClipboardJS('.clipboard-btn', {
      text: () => emailAddress,
    });

    clipboard.on('success', () => {
      setIsCopied(true);
      clipboard.destroy();
    });

    clipboard.onClick({ currentTarget: document.querySelector('.clipboard-btn') });
  };

  return (
    <div className='h-screen flex flex-col' id="about">
      <div className="h-full w-full flex items-center justify-center">
        <div className='relative w-[80%] h-[95%] bg-lime rounded-custom1'>
          <div className='relative absolute top-[0%] left-[8%]'>
            <img src={profilePicture} alt="profil" className='w-20 sm:w-36 lg:w-48 rounded-full border-4 sm:border-8 border-lime'></img>
            <div className="hidden sm:block absolute top-[12%] left-[-6%] lg:top-[20%] lg:left-[-3%]"><Spark rotate='rotate-[200deg]'/></div>
            <div className="hidden sm:block absolute top-[0%] left-[-4%] lg:top-[8%] lg:left-[-1.8%]"><Spark rotate='rotate-[218deg]'/></div>
            <div className="hidden sm:block absolute top-[-9%] left-[-1.1%] lg:top-[-1%] lg:left-[-0.1%]"><Spark rotate='rotate-[238deg]'/></div>
          </div>
          <div className='absolute top-[13%] left-0 w-full pr-[18%] pl-[15%] text-justify'>
            <p className='text-center text-xl sm:text-3xl lg:text-6xl'><b>{t('about.welcome')}</b></p>
            <br></br>
            <br></br>
            <p className='text-xs sm:text-base lg:text-xl'>{t('about.iam')} <b>{t('about.profession')}</b> {t('about.formation')}</p>
            <br></br>
            <p className='text-xs sm:text-base lg:text-xl'><b>{t('about.self-learner')}</b>{t('about.work')} <b>{t('about.conception')}</b>{t('about.maintenance')}</p>
            <br></br>
            <p className='text-xs sm:text-base lg:text-xl'>{t('about.expertise')} <b>{t('about.challenge')} </b>{t('about.together')}</p>
            <div className='w-full flex justify-center' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button onClick={handleButtonClick} className='relative flex items-center justify-around rounded-custom3 bg-blue text-xs sm:text-xl lg:text-2xl py-[0.6%] px-[1%] clipboard-btn'>
                <div className='m-2'><FontAwesomeIcon icon={faEnvelope} /></div>
                {isHovered && <span className='text-xl m-2'>{emailAddress}</span>}
                {isCopied && (
                  <div className="absolute bottom-[-1px] text-sm text-lime">{t('about.mail')}</div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to="projects" smooth={true}>
        <ScrollButton hoverColor="hover:bg-purple" groupHoverColor="group-hover:bg-purple"/>
      </Link>
    </div>
  );
}

export default About;
