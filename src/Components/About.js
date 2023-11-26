import { React, useRef, useState, useEffect } from 'react';
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
  const [currentWidth, setCurrentWidth] = useState();
  const emailAddress = 'juliebrunet.pro@outlook.fr';
  const containerRef = useRef(null);
  const emailRef = useRef(null);

  const handleMouseEnter = (event) => {
    setIsHovered(true);
    emailRef.current.style.display = "inline-block"
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsCopied(false)
    emailRef.current.style.display = "none"
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

  useEffect(() => {
    setCurrentWidth(containerRef.current.offsetWidth);
  }, [isHovered]);

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
            <div className='w-full flex justify-center'>
              <div
                onClick={handleButtonClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} className='relative flex rounded-custom3 bg-blueLight text-2xl h-14 clipboard-btn transition-width duration-500 ease-in' style={{ width: `${currentWidth}px` }}>
                <div ref={containerRef} className='flex items-center justify-around px-6'>
                  <div className=''><FontAwesomeIcon icon={faEnvelope}/></div>
                  <p className='text-xl font-thin m-2 hidden cursor-pointer' ref={emailRef}>{emailAddress}</p>
                </div>
                {isCopied && (
                  <div className='absolute bottom-[-20px] left-1/2 translate-x-center flex items-center justify-center rounded-custom3 bg-blueMedium h-8 w-20'>
                    <div className="text-center text-sm w-20">{t('about.mail')}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="projects" smooth={true}>
        <ScrollButton groupHoverColor="group-hover:bg-purple"/>
      </Link>
    </div>
  );
}

export default About;
