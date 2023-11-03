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
            <img src={profilePicture} alt="profil" width='200' className='rounded-full border-8 border-lime'></img>
            <div className="absolute top-[20%] left-[-3%]"><Spark rotate='rotate-[200deg]'/></div>
            <div className="absolute top-[8%] left-[-1.8%]"><Spark rotate='rotate-[218deg]'/></div>
            <div className="absolute top-[-1%] left-[-0.1%]"><Spark rotate='rotate-[238deg]'/></div>
          </div>
          <div className='absolute top-[13%] left-0 w-full pr-[18%] pl-[15%] text-justify'>
            <p className='text-center text-6xl pb-[10%]'><b>Bienvenue !</b></p>
            <p className='text-xl pb-[3%]'>Je suis une <b>développeuse web fullstack</b> basée à Paris. Passionnée par le code et le design graphique, j'ai suivi la formation du Wagon afin d'apprendre les fondements du code et de la programmation orientée objet.</p>
            <p className='text-xl'><b>Autodidacte</b>, j'ai ensuite continué de me former et j'ai eu l'opportunité de travailler sur différents projets, en équipe et seule. Je t'invite à regarder les projets que j'ai réalisé :</p>
            <div className='w-full flex justify-center mt-[-2%] pb-[3%]'>
              <button className='rounded-custom2 bg-purple text-violet text-2xl p-[0.8%]'>
                <FontAwesomeIcon icon={faLaptopCode} />
              </button>
            </div>
            <p className='text-xl pb-[2%]'>J'interviens sur l'ensemble de l'élaboration du site web, de la <b>conception à la programmation</b>, assurant ensuite sa maintenance. Si tu souhaites que l'on travaille ensemble, n'hésite pas à me contacter :</p>
            <div className='w-full flex justify-center mt-[-2%]'>
              <button className='rounded-custom3 bg-blue text-violet text-2xl py-[0.6%] px-[1%]'>
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*

            <div className='rounded-full py-3 px-4 bg-blue opacity-40 absolute bottom-{-1} left-96 text-violet text-3xl flex items-center' style={{borderRadius: '30% 60% 60% 40% / 70% 50% 50% 30%'}}>
              <div className='flex items-center justify-center'><FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
          </div>
        </div>
      </div> */}
      <ScrollButton hoverColor="hover:bg-purple" groupHoverColor="group-hover:bg-purple"/>
    </div>
  );
}

export default About;
