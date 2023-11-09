import { DiJavascript, DiReact, DiRubyRough } from 'react-icons/di';
import { BiLogoTailwindCss, BiLogoBootstrap } from 'react-icons/bi'
import { SiRubyonrails } from 'react-icons/si'

export const ProjectsData = [
  {
    id: 1,
    title: "Mon Portfolio",
    image: "",
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
    image: <img src={require("../assets/parisImproImage.png")} alt="projet mos" />,
    description: "Gestion des absences et des rattrapages des cours d'improvision pour une compagnie de théâtre",
    languages: [
      { key:"rubyIcon", element: <DiRubyRough />, text: "Ruby" },
      { key:"rubyOnRailsIcon", element:<SiRubyonrails />, text: "Ruby on Rails" },
      { key:"bootstrapIcon", element:<BiLogoBootstrap />, text: "Bootstrap" }
    ],
    linkCode: "https://github.com/jlbrunet/Paris_Impro_Application"
  },
  {
    id: 3,
    title: "My Only Sub",
    image: <img src={require("../assets/mosImage.png")} alt="projet mos" />,
    description: "Proposition de la plateforme de streaming la plus adaptée pour le prochain mois",
    languages: [
      { key:"rubyIcon", element: <DiRubyRough />, text: "Ruby" },
      { key:"rubyOnRailsIcon", element:<SiRubyonrails />, text: "Ruby on Rails" },
      { key:"bootstrapIcon", element:<BiLogoBootstrap />, text: "Bootstrap" }
    ],
    linkCode: "https://github.com/b-laf/MyOnlySub"
  },
]
