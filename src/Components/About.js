import React from 'react';
import profilePicture from '../assets/profilePicture.jpg'
import Spark from './Spark/Spark'
import ScrollButton from './ScrollButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className='relative grow flex flex-col justify-center items-center'>
        <div className='w-full h-full relative'>
          <div className='absolute top-10 left-10 w-[100%] h-[100%] bg-lime opacity-80 rounded-custom1'></div>
          <div className='absolute top-12 w-56 flex flex-col'>
            <div className='relative flex items-center justify-center'>
              <div className="w-0 absolute top-10 left-5" style={{transform: 'rotate(200deg)'}}><Spark /></div>
              <div className="w-0 absolute top-6 left-8" style={{transform: 'rotate(220deg)'}}><Spark /></div>
              <div className="w-0 absolute top-3 left-12" style={{transform: 'rotate(240deg)'}}><Spark /></div>
            </div>
            <div className='flex items-center justify-center'>
              <img src={profilePicture} alt="profil" width='200' className='rounded-full border-4 border-lime'></img>
            </div>
          </div>
          <p className='absolute top-32 left-60 text-7xl'><b>Bienvenue !</b></p>
          <div className='absolute top-64 text-2xl text-justify pl-32 pr-40 pt-4'>
            <p> Je suis une <b>développeuse web fullstack</b> basée à Paris. Passionnée par le code et le design graphique, j'ai suivi la formation du Wagon afin d'apprendre les fondements du code et de la programmation orientée objet.</p>
            <br></br>
            <p><b>Autodidacte</b>, j'ai ensuite continué de me former et j'ai eu l'opportunité de travailler sur différents projets, en équipe et seule. Je t'invite à regarder les projets que j'ai réalisé.</p>
            <div className='rounded-full py-3 px-4 bg-purple opacity-40 absolute bottom-24 left-96 text-violet text-3xl flex items-center' style={{borderRadius: '30% 60% 60% 40% / 70% 50% 50% 30%'}}>
              <div className='flex items-center justify-center'><FontAwesomeIcon icon={faLaptopCode} /></div>
            </div>
            <br></br>
            <p>J'interviens sur l'ensemble de l'élaboration du site web, de la <b>conception à la programmation</b>, assurant ensuite sa maintenance. Si tu souhaites que l'on travaille ensemble, n'hésite pas à me contacter.</p>
            <div className='rounded-full py-3 px-4 bg-blue opacity-40 absolute bottom-{-1} left-96 text-violet text-3xl flex items-center' style={{borderRadius: '30% 60% 60% 40% / 70% 50% 50% 30%'}}>
              <div className='flex items-center justify-center'><FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
          </div>
        </div>
      </div>
      <ScrollButton color="purple"/>
    </div>
  );
}

export default About;
