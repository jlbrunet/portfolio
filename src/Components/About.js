import React from 'react';
import profilePicture from '../assets/profilePicture.jpg'
import Spark from './Spark/Spark'
import PotatoForm from './PotatoForm'

const About = () => {
  return (
    <div className='w-full h-full flex items-center'>
      <div className='relative grow flex flex-col justify-center items-center'>
        <div className='relative'>
          <PotatoForm maxWidth="56" maxHeight="36" color="bg-lime" opacity="opacity-80" borderRadius="30% 60% 60% 40% / 70% 50% 50% 30%"/>
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
            <p><b>Autodidacte</b>, j'ai ensuite continué de me former et j'ai eu l'opportunité de travailler sur différents projets, en équipe et seule.</p>
            <br></br>
            <p>J'interviens sur l'ensemble de l'élaboration du site web, de la <b>conception à la programmation</b>, assurant ensuite sa maintenance.</p>
          </div>
          <div className='absolute bottom-10 left-36 flex items-center justify-between'>
            <div className="mr-5 mb-2" style={{transform: 'rotate(12deg)'}}>
                <PotatoForm maxWidth="10" maxHeight="2" color="bg-white" opacity="opacity-30" borderRadius="20% 30% 30% 40% / 40% 50% 60% 60%"/>
                <div className='absolute top-1 left-0 w-full flex justify-center items-center'>
                  <p className='text-2xl'>Créative</p>
                </div>
            </div>
            <div className="mt-12" style={{transform: 'rotate(0deg)'}}>
                <PotatoForm maxWidth="10" maxHeight="2" color="bg-white" opacity="opacity-30" borderRadius="20% 30% 30% 40% / 40% 50% 60% 60%"/>
                <div className='absolute top-1 left-0 w-full flex justify-center items-center'>
                  <p className='text-2xl'>Curieuse</p>
                </div>
            </div>
            <div className="ml-5 mt-2" style={{transform: 'rotate(-10deg)'}}>
                <PotatoForm maxWidth="10" maxHeight="2" color="bg-white" opacity="opacity-30" borderRadius="20% 30% 30% 40% / 40% 50% 60% 60%"/>
                <div className='absolute top-1 left-0 w-full flex justify-center items-center'>
                  <p className='text-2xl'>Rigoureuse</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mr-24'>
        {/* <p> Je t'invite à regarder les projets que j'ai réalisé == Si tu souhaites travailler avec moi, n'hésites pas à me contacter ==</p> */}
        <div className='relative mb-10'>
          <PotatoForm maxWidth="24" maxHeight="16" color="bg-lime" opacity="opacity-80" borderRadius="40% 50% 40% 20% / 60% 50% 50% 40%"/>
          <p className='absolute top-1/3 text-2xl text-center px-10 pt-3'>Si tu souhaites travailler avec moi, n'hésites pas à me contacter !</p>
        </div>
        <div>
          <PotatoForm maxWidth="24" maxHeight="16" color="bg-lime" opacity="opacity-80" borderRadius="50% 40% 30% 50% / 50% 40% 60% 60%"/>
        </div>
      </div>
    </div>
  );
}

export default About;
