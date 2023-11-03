import React from 'react';
import profilePicture from '../assets/profilePicture.jpg'
import Spark from './Spark'
import ScrollButton from './ScrollButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className="h-full w-full flex items-center justify-center">
        <div className='relative w-[80%] h-[95%] bg-lime rounded-custom1'>
          <div className='relative absolute top-[0%] left-[8%]'>
            <img src={profilePicture} alt="profil" className='w-20 sm:w-36 lg:w-48 rounded-full border-4 sm:border-8 border-lime'></img>
            <div className="hidden sm:block absolute top-[12%] left-[-6%] lg:top-[20%] lg:left-[-3%]"><Spark rotate='rotate-[200deg]'/></div>
            <div className="hidden sm:block absolute top-[0%] left-[-4%] lg:top-[8%] lg:left-[-1.8%]"><Spark rotate='rotate-[218deg]'/></div>
            <div className="hidden sm:block absolute top-[-9%] left-[-1.1%] lg:top-[-1%] lg:left-[-0.1%]"><Spark rotate='rotate-[238deg]'/></div>
          </div>
          <div className='absolute top-[13%] left-0 w-full pr-[18%] pl-[15%] text-justify'>
            <p className='text-center text-xl sm:text-3xl lg:text-6xl'><b>Bienvenue !</b></p>
            <br></br>
            <br></br>
            <p className='text-xs sm:text-base lg:text-xl'>Je suis une <b>développeuse web fullstack</b> basée à Paris. Passionnée par le code et le design graphique, j'ai suivi la formation du Wagon afin d'apprendre les fondements du code et de la programmation orientée objet.</p>
            <br></br>
            <p className='text-xs sm:text-base lg:text-xl'><b>Autodidacte</b>, j'ai ensuite continué de me former et j'ai eu l'opportunité de travailler sur différents projets, en équipe et seule. Je t'invite à regarder les projets que j'ai réalisé :</p>
            <div className='w-full flex justify-center pb-[3%]'>
              <button className='rounded-custom2 bg-purple text-xs sm:text-xl lg:text-2xl p-[0.8%]'>
                <FontAwesomeIcon icon={faLaptopCode} />
              </button>
            </div>
            <p className='text-xs sm:text-base lg:text-xl pb-[2%]'>J'interviens sur l'ensemble de l'élaboration du site web, de la <b>conception à la programmation</b>, assurant ensuite sa maintenance. Si tu souhaites que l'on travaille ensemble, n'hésite pas à me contacter :</p>
            <div className='w-full flex justify-center'>
              <button className='rounded-custom3 bg-blue text-xs sm:text-xl lg:text-2xl py-[0.6%] px-[1%]'>
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ScrollButton hoverColor="hover:bg-purple" groupHoverColor="group-hover:bg-purple"/>
    </div>
  );
}

export default About;
