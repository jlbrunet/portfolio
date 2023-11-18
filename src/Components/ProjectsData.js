import { DiJavascript, DiReact, DiRubyRough } from 'react-icons/di'
import { BiLogoTailwindCss, BiLogoBootstrap, BiLogoPostgresql } from 'react-icons/bi'
import { SiRubyonrails } from 'react-icons/si'
import { PiFigmaLogoBold } from "react-icons/pi";

export const ProjectsData = [
  {
    id: 1,
    title: "Mon Portfolio",
    image: "",
    video: <video loading="lazy" width="1200px" className='rounded-xl' controls><source src={require("../assets/parisImproVideo.mp4")} type="video/mp4" />Ton navigateur ne supporte pas la vidéo.</video>,
    description: "Si tu es arrivé.e jusque-là c'est que tu n'as pas besoin de description ;)",
    languages: [
      { key:"jsIcon", element: <DiJavascript />, text: "JavaScript" },
      { key:"reactIcon", element:<DiReact />, text: "React" },
      { key:"tailwindIcon", element:<BiLogoTailwindCss />, text: "Tailwind" }
    ],
    linkCode: "https://github.com/jlbrunet/portfolio"
  },
  {
    id: 2,
    title: "Paris Impro",
    video: "",
    image: <img src={require("../assets/parisImproImage.png")} alt="projet mos" className='w-full h-full object-cover rounded-t-3xl'/>,
    description: "Gestion des absences et des rattrapages des cours d'improvision pour une compagnie de théâtre",
    languages: [
      { key:"rubyIcon", element: <DiRubyRough />, text: "Ruby" },
      { key:"rubyOnRailsIcon", element:<SiRubyonrails />, text: "Ruby on Rails" },
      { key:"postgreSQLIcon", element:<BiLogoPostgresql />, text: "PostgreSQL" },
      { key:"bootstrapIcon", element:<BiLogoBootstrap />, text: "Bootstrap" },
      { key:"figmaIcon", element:<PiFigmaLogoBold />, text: "Figma" }
    ],
    linkCode: "https://github.com/jlbrunet/Paris_Impro_Application"
  },
  {
    id: 3,
    title: "My Only Sub",
    image: <img src={require("../assets/mosImage.png")} alt="projet mos" className='w-full h-full rounded-t-3xl'/>,
    video: <video loading="lazy" width="1200px" className='rounded-xl' controls><source src={require("../assets/mosVideo.mp4")} type="video/mp4" />Ton navigateur ne supporte pas la vidéo.</video>,
    description: "Proposition de la plateforme de streaming la plus adaptée pour le prochain mois",
    languages: [
      { key:"rubyIcon", element: <DiRubyRough />, text: "Ruby" },
      { key:"rubyOnRailsIcon", element:<SiRubyonrails />, text: "Ruby on Rails" },
      { key:"postgreSQLIcon", element:<BiLogoPostgresql />, text: "PostgreSQL" },
      { key:"bootstrapIcon", element:<BiLogoBootstrap />, text: "Bootstrap" },
      { key:"figmaIcon", element:<PiFigmaLogoBold />, text: "Figma" }
    ],
    linkCode: "https://github.com/b-laf/MyOnlySub"
  },
]
