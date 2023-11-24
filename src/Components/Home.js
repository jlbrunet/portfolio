import { React, useEffect } from 'react';
import ScrollButton from './ScrollButton';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    localStorage.setItem('selectedLanguage', language)
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <div className='h-screen'>
      <div>
        <div className='absolute left-[5%] top-[15%] lg:left-[10%] lg:top-[15%] w-[40%] h-[30%] md:w-[35%] md:h-[35%] lg:w-[30%] lg:h-[40%] xl:w-[25%] xl:h-[50%] bg-lime opacity-80 rounded-custom1'></div>
        <div className='absolute left-[20%] top-[55%] lg:left-[25%] lg:top-[45%] w-[60%] h-[25%] md:w-[50%] md:h-[30%] lg:w-[35%] lg:h-[35%] xl:w-[30%] xl:h-[50%] bg-purple rounded-custom2'></div>
        <div className='absolute left-[50%] top-[30%] lg:left-[60%] lg:top-[20%] xl:left-[70%] xl:top-[15%] w-[45%] h-[30%] md:w-[40%] md:h-[35%] lg:w-[35%] lg:h-[40%] xl:w-[25%] xl:h-[50%] bg-blue opacity-40 rounded-custom3'></div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between text-center font-semibold'>
        <div className='text-lg lg:text-xl xl:text-2xl flex justify-end'>
          <button onClick={() => changeLanguage("fr")}>FR</button>
          <button onClick={() => changeLanguage("en")} className='my-2 mx-3 lg:my-4 lg:mx-6'>EN</button>
        </div>
        <div>
          <p className='mb-8 text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'>{t('home.greeting')}</p>
          <p className='px-10 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>{t('home.profession')}</p>
        </div>
        <Link to="about" smooth={true}>
          <ScrollButton hoverColor="hover:bg-lime" groupHoverColor="group-hover:bg-lime"/>
        </Link>
      </div>
    </div>
  );
}

export default Home;
