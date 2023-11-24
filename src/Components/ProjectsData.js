import { DiJavascript, DiReact, DiRubyRough } from 'react-icons/di'
import { BiLogoTailwindCss, BiLogoBootstrap, BiLogoPostgresql } from 'react-icons/bi'
import { SiRubyonrails } from 'react-icons/si'
import { PiFigmaLogoBold } from "react-icons/pi"
import { useTranslation } from 'react-i18next'

const ProjectsData = () => {
  const { t, i18n } = useTranslation()
  const getProjectsData = [
    {
      id: 1,
      title: t("projects.titles.portfolio"),
      image:
      i18n.language === 'fr' ? (
        <img src={require("../assets/portfolioImageFR.png")} alt="portolfio" className='w-full h-full object-cover rounded-t-3xl'/>
      ) : (
        <img src={require("../assets/portfolioImageEN.png")} alt="portolfio" className='w-full h-full object-cover rounded-t-3xl'/>
      ),
      video: "",
      videoDisplayed: false,
      description: t('projects.descriptions.portfolio'),
      languages: [
        { key:"jsIcon", element: <DiJavascript />, text: t("projects.icons.javascript") },
        { key:"reactIcon", element:<DiReact />, text: t("projects.icons.react") },
        { key:"tailwindIcon", element:<BiLogoTailwindCss />, text: t("projects.icons.tailwind") }
      ],
      linkCode: "https://github.com/jlbrunet/portfolio"
    },
    {
      id: 2,
      title: t("projects.titles.paris impro"),
      video: <video loading="lazy" width="400px" className='rounded-xl' controls><source src={require("../assets/parisImproVideo.mp4")} type="video/mp4" />Ton navigateur ne supporte pas la vidéo.</video>,
      videoDisplayed: true,
      image: <img src={require("../assets/parisImproImage.png")} alt="paris impro" className='w-full h-full object-cover rounded-t-3xl'/>,
      description: t('projects.descriptions.paris impro'),
      languages: [
        { key:"rubyIcon", element: <DiRubyRough />, text: t("projects.icons.ruby") },
        { key:"rubyOnRailsIcon", element:<SiRubyonrails />, text: t("projects.icons.ruby on rails") },
        { key:"postgreSQLIcon", element:<BiLogoPostgresql />, text: t("projects.icons.postgre sql") },
        { key:"bootstrapIcon", element:<BiLogoBootstrap />, text: t("projects.icons.bootstrap") },
        { key:"figmaIcon", element:<PiFigmaLogoBold />, text: t("projects.icons.figma") }
      ],
      linkCode: "https://github.com/jlbrunet/Paris_Impro_Application"
    },
    {
      id: 3,
      title: t('projects.titles.mos'),
      image: <img src={require("../assets/mosImage.png")} alt="my only sub" className='w-full h-full rounded-t-3xl'/>,
      video: <video loading="lazy" width="1200px" className='rounded-xl' controls><source src={require("../assets/mosVideo.mp4")} type="video/mp4" />Ton navigateur ne supporte pas la vidéo.</video>,
      videoDisplayed: true,
      description: t('projects.descriptions.mos'),
      languages: [
        { key:"rubyIcon", element: <DiRubyRough />, text: t("projects.icons.ruby") },
        { key:"rubyOnRailsIcon", element:<SiRubyonrails />, text: t("projects.icons.ruby on rails") },
        { key:"postgreSQLIcon", element:<BiLogoPostgresql />, text: t("projects.icons.postgre sql") },
        { key:"bootstrapIcon", element:<BiLogoBootstrap />, text: t("projects.icons.bootstrap") },
        { key:"figmaIcon", element:<PiFigmaLogoBold />, text: t("projects.icons.figma") }
      ],
      linkCode: "https://github.com/b-laf/MyOnlySub"
    },
  ]

  return ( getProjectsData );
}

export default ProjectsData;
