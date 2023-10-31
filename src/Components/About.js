import React from 'react';
import profilePicture from '../assets/profilePicture.jpg'
import Spark from './Spark/Spark'
import PotatoForm from './PotatoForm'

const About = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='relative'>
        <PotatoForm maxWidth="52" maxHeight="36" color="bg-lime" opacity="opacity-80" borderRadius="30% 60% 60% 40% / 70% 50% 50% 30%"/>
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
      </div>
      <p>Bienvenue !
        Je suis une développeuse web fullstack basée à Paris.
        Passionnée par le code et le design graphique, j'ai suivi la formation du Wagon afin d'apprendre les fondements du code et de la programmation orientée objet. Autodidacte, j'ai ensuite continué de me former et j'ai eu l'opportunité de travailler sur différents projets, en équipe et seule.
        J'interviens sur l'ensemble de la construction du site web, de la conception à la programmation, assurant ensuite sa maintenance.
        Je t'invite à regarder les projets que j'ai réalisé ==
        Si tu souhaites travailler avec moi, n'hésites pas à me contacter ==
      </p>
      <p>Créative</p>
      <p>Curieuse</p>
      <p>Rigoureuse</p>
    </div>
  );
}

export default About;
