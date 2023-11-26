import { React, useEffect, useState, useCallback } from 'react';
import ScrollButton from './ScrollButton';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation()
  const [scrollVisible, setScrollVisible] = useState(true);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    localStorage.setItem('selectedLanguage', language)
    const currentLanguage = localStorage.selectedLanguage
    const frButton = document.querySelector('.frButton')
    const enButton = document.querySelector('.enButton')
    if (currentLanguage.toUpperCase() === "EN") {
      enButton.classList.remove('font-extralight')
      frButton.classList.add('font-extralight')
    } else {
      frButton.classList.remove('font-extralight')
      enButton.classList.add('font-extralight')
    }
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage')
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
    const frButton = document.querySelector('.frButton')
    const enButton = document.querySelector('.enButton')
    storedLanguage.toUpperCase() === "FR" ? enButton.classList.add('font-extralight') : frButton.classList.add('font-extralight')
  }, [i18n]);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const threshold = 100;

    if (scrolled > threshold && scrollVisible) {
      setScrollVisible(false);
    } else if (scrolled <= threshold && !scrollVisible) {
      setScrollVisible(true);
    }
  }, [scrollVisible]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className='h-screen'>
      <div>
        <div className='absolute min-w-56 w-1/2 h-1/4 top-1/4 left-0 lg:left-[10%] lg:top-[15%] md:w-[35%] md:h-[35%] lg:w-[30%] lg:h-[40%] xl:w-[25%] xl:h-[50%] bg-lime opacity-80 rounded-custom1'></div>
        <div className='absolute min-w-80 w-2/3 h-1/5 top-1/2 right-1/4 lg:left-[25%] lg:top-[45%] md:w-[50%] md:h-[30%] lg:w-[35%] lg:h-[35%] xl:w-[30%] xl:h-[50%] bg-purple rounded-custom2'></div>
        <div className='absolute min-w-48 w-1/2 h-1/4 top-1/3 right-0 lg:left-[60%] lg:top-[20%] xl:left-[70%] xl:top-[15%]  md:w-[40%] md:h-[35%] lg:w-[35%] lg:h-[40%] xl:w-[25%] xl:h-[50%] bg-blue opacity-40 rounded-custom3'></div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between text-center font-semibold'>
        <div className='text-base md:text-xl lg:text-xl xl:text-2xl flex justify-end'>
          <div className='relative w-12 h-12 mt-3 group'>
            <div className="frContainer group-hover:absolute group-hover:top-0 group-hover:left-1/2 group-hover:translate-x-center group-hover:h-full group-hover:w-12 group-hover:bg-blueLight group-hover:rounded-custom3 transition-colors duration-500 ease-in-out"></div>
            <button onClick={() => changeLanguage("fr")} className='frButton h-full absolute top-0 left-1/2 translate-x-center'>FR</button>
          </div>
          <div className='relative w-12 h-12 mt-3 md:mx-3 group'>
            <div className="frContainer group-hover:absolute group-hover:top-0 group-hover:left-1/2 group-hover:translate-x-center group-hover:h-full group-hover:w-12 group-hover:bg-blueLight group-hover:rounded-custom3 transition-colors duration-500 ease-in-out"></div>
            <button onClick={() => changeLanguage("en")} className='enButton h-full absolute top-0 left-1/2 translate-x-center'>EN</button>
          </div>
        </div>
        <div>
          <p className='mb-8 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'>{t('home.greeting')}</p>
          <p className='px-10 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>{t('home.profession')}</p>
        </div>
        <div className={`${scrollVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in-out`}>
          <Link to="about" smooth={true}>
            <ScrollButton groupHoverColor="group-hover:bg-lime"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
