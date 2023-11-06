import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'

export const ProjectsData = [
  {
    id: 1,
    title: "Mon Portfolio",
    linkVideo: "",
    description: "Si tu es arrivé.e jusque-là c'est que tu n'as pas besoin de description ;)",
    languages: [
      { key:"jsIcon", element: <FontAwesomeIcon icon={faSquareJs} /> },
      { key:"reactIcon", element:<FontAwesomeIcon icon={faReact} /> },
      { key:"tailwindIcon", element:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" }
    ],
    linkCode: "https://github.com/jlbrunet/portfolio"
  },
  {
    id: 2,
    title: "Paris Impro",
    linkVideo: "",
    description: "Gestion des absences et des rattrapages des cours d'improvision pour une compagnie de théâtre",
    languages: [
      { key:"rubyIcon", element:"https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
      { key:"rubyOnRailsIcon", element:"https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg" },
      { key:"bootstrapIcon", element:<FontAwesomeIcon icon={faBootstrap} /> }
    ],
    linkCode: "https://github.com/jlbrunet/Paris_Impro_Application"
  },
  {
    id: 3,
    title: "My Only Sub",
    linkVideo: "",
    description: "Proposition de la plateforme de streaming la plus adaptée pour le prochain mois",
    languages: [
      { key:"rubyIcon", element:"https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
      { key:"rubyOnRailsIcon", element:"https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg" },
      { key:"bootstrapIcon", element:<FontAwesomeIcon icon={faBootstrap} /> }
    ],
    linkCode: "https://github.com/b-laf/MyOnlySub"
  },
  {
    id: 4,
    title: "On Air",
    linkVideo: "",
    description: "Marketplace de mise en relation entre les stand-uppers et les clubs",
    languages: [
      { key:"rubyIcon", element:"https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
      { key:"rubyOnRailsIcon", element:"https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg" },
      { key:"bootstrapIcon", element:<FontAwesomeIcon icon={faBootstrap} /> }
    ],
    linkCode: "https://github.com/maxco2023/ON_AIR"
  }
]
