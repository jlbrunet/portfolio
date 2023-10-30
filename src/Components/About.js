import React from 'react';
import profilePicture from '../assets/profilePicture.jpg'

const About = () => {
  return (
    <div className='w-full h-full'>
      <p>Etincelles</p>
      <img src={profilePicture} alt="profil" width='200' className='rounded-full border-4 border-lime'></img>
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
