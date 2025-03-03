import styles from "./job-experience.module.css";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { PanelMenu } from "primereact/panelmenu";

console.log(styles);

// Images
import vueImage from "../../assets/images/tech-tools/vue.png";
import angularImage from "../../assets/images/tech-tools/angular.png";
import reactImage from "../../assets/images/tech-tools/react.png";
import dotnetImage from "../../assets/images/tech-tools/net.png";
import mysqlImage from "../../assets/images/tech-tools/mysql.png";
import dockerImage from "../../assets/images/tech-tools/docker.png";
import androidKotlinImage from "../../assets/images/tech-tools/android-kotlin.png";
import flutterImage from "../../assets/images/tech-tools/flutter.png";
import windowsImage from "../../assets/images/tech-tools/windows.svg";
import debianImage from "../../assets/images/tech-tools/debian.png";
import ubuntuImage from "../../assets/images/tech-tools/ubuntu.png";

// Tech Tool
import EnhancedMenuItem from "../../shared/extensions/menu-item/menu-item.enhanced.interface";
import TechTools from "../../types/tech-tools/tech-tools.interface";
import LanguageSkill from "../../types/language-skills/languake-skills.interface";

const masteryLevelColors = {
  beginner: {
    textColor: "text-green-400",
    bgColor: "bg-green-100",
    borderColor: "border-green-500",
  },
  intermediate: {
    textColor: "text-blue-500",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-500",
  },
  proficient: {
    textColor: "text-purple-400",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-500",
  },
  advanced: {
    textColor: "text-orange-400",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-500",
  },
  expert: {
    textColor: "text-red-400",
    bgColor: "bg-red-100",
    borderColor: "border-red-500",
  },
};

const events = [
  {
    jobPosition: "Fullstack Developer",
    jobCountry: "Peru",
    jobPlace: "Valticore",
    dateInterval: " 10/07/2024 – 31/12/2024",
    content: (
      <p className="text-justify">
        Desarrollé un sistema de transporte inteligente para aeropuertos,
        optimizando la movilidad con geolocalización en tiempo real. Usé Kotlin
        para <span className="text-indigo-400">Android</span>, reforcé mis
        habilidades en <span className="text-indigo-400">.NET</span> y{" "}
        <span className="text-indigo-400">LINQ</span>, y me adapté rápidamente a{" "}
        <span className="text-indigo-400">Angular</span>. Además, mejoré mi
        comunicación y trabajo en equipo.
      </p>
    ),
    icon: "pi pi-shopping-cart",
    color: "#673AB7",
  },
  {
    jobPosition: "Fullstack Developer",
    jobCountry: "Peru",
    jobPlace: "Controlware S.A.C",
    dateInterval: "05/07/2023 – 31/10/2024",
    content: (
      <p className="text-justify">
        Desarrollé un sistema de gestión empresarial minimalista con CRUD de
        importaciones, productos y cotizaciones. Usé{" "}
        <span className="text-indigo-400">Entity Framework</span> y{" "}
        <span className="text-indigo-400">MySQL</span> para optimizar el
        rendimiento, y <span className="text-indigo-400">Vue.js</span> con{" "}
        <span className="text-indigo-400">PrimeVue</span> para la interfaz.
        Desplegué con <span className="text-indigo-400">Docker</span> en
        servidores <span className="text-indigo-400">Ubuntu</span>, asegurando
        estabilidad y escalabilidad. Esta experiencia fortaleció mis habilidades
        en <span className="text-indigo-400">.NET, Vue, bases de datos y</span>{" "}
        administración de servidores{" "}
        <span className="text-indigo-400">Linux.</span>
      </p>
    ),
    icon: "pi pi-shopping-cart",
    color: "#673AB7",
  },
];

type ContentProp = {
  jobPosition: string;
  jobPlace: string;
  content: JSX.Element;
  jobCountry: string;
};

const ContentTemplate = ({ contentProp }: { contentProp: ContentProp }) => {
  return (
    <>
      <Card className="bg-zinc-900 mb-5 w-full min-h-[250px] max-w-[520px]">
        <h1 className="text-left text-indigo-400 text-md font-bold mb-2">
          <i className="isax-bold-arrow-right-1 mr-2"></i>
          {contentProp.jobPosition} - {contentProp.jobPlace} -{" "}
          {contentProp.jobCountry}
        </h1>
        <div>{contentProp.content}</div>
      </Card>
    </>
  );
};

const JobExperience = () => {
  const languageSkill = (item: EnhancedMenuItem<LanguageSkill>) => {
    return (
      <>
        <div className="flex items-center gap-3 justify-between px-[10px] py-[20px]">
          <span>{item.elementValue?.languageName}</span>
          <span>{item.elementValue?.mastery}</span>
        </div>
      </>
    );
  };

  const techSkill = (item: EnhancedMenuItem<TechTools>) => {
    const mastery =
      item.elementValue?.mastery?.toLowerCase() as keyof typeof masteryLevelColors;
    const colorClass = mastery
      ? masteryLevelColors[mastery]?.textColor
      : "text-gray-500";

    return (
      <>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="w-[16px] h-full"
              src={item.elementValue?.image}
              alt=""
            />
            <div>{item.elementValue?.techName}</div>
          </div>
          <span className={colorClass}>{item.elementValue?.mastery}</span>
        </div>
      </>
    );
  };
  const skillItems: EnhancedMenuItem<TechTools>[] = [
    {
      label: "Frontend",
      icon: "isax-bold-monitor",
      items: [
        {
          elementValue: {
            image: vueImage,
            techName: "Vue",
            mastery: "Advanced",
          },
          template: techSkill,
        },
        {
          elementValue: {
            image: angularImage,
            techName: "Angular",
            mastery: "Proficient",
          },
          template: techSkill,
        },
        {
          elementValue: {
            image: reactImage,
            techName: "React",
            mastery: "Proficient",
          },
          template: techSkill,
        },
      ],
    },
    {
      label: "Backend",
      icon: "isax-bold-driver-2",
      items: [
        {
          elementValue: {
            image: dotnetImage,
            techName: ".NET",
            mastery: "Advanced",
          },
          template: techSkill,
        },
        {
          elementValue: {
            image: mysqlImage,
            techName: "MySQL",
            mastery: "Proficient",
          },
          template: techSkill,
        },
        {
          elementValue: {
            image: dockerImage,
            techName: "Docker",
            mastery: "Proficient",
          },
          template: techSkill,
        },
      ],
    },
    {
      label: "Mobile",
      icon: "isax-bold-mobile",
      items: [
        {
          elementValue: {
            image: androidKotlinImage,
            techName: "Android Kotlin",
            mastery: "Intermediate",
          },
          template: techSkill,
        },
        {
          elementValue: {
            image: flutterImage,
            techName: "Flutter",
            mastery: "Proficient",
          },
          template: techSkill,
        },
      ],
    },
    {
      label: "OS",
      icon: "isax-bold-cpu",
      items: [
        {
          elementValue: {
            image: windowsImage,
            techName: "Windows",
            mastery: "Advanced",
          },
          template: techSkill,
        },
        {
          elementValue: {
            image: debianImage,
            techName: "Debian",
            mastery: "Advanced",
          },
          template: techSkill,
        },
        {
          elementValue: {
            image: ubuntuImage,
            techName: "Ubuntu",
            mastery: "Advanced",
          },
          template: techSkill,
        },
      ],
    },
  ];

  const languageSkills: EnhancedMenuItem<LanguageSkill>[] = [
    {
      elementValue: {
        languageName: "English",
        mastery: "B2-C1",
      },
      template: languageSkill,
    },
    {
      elementValue: {
        languageName: "Spanish",
        mastery: "Native",
      },
      template: languageSkill,
    },
  ];

  return (
    <div
      id="experience"
      className="flex flex-col lg:flex-row justify-center w-full px-[20px] md:px-[60px] py-[110px] bg-zinc-800 gap-[20px] min-h-fit"
    >
      
      <div className="bg-zinc-800 flex flex-col justify-start items-center gap-10 w-full">
        <h1 className="averta text-3xl text-indigo-300 text-center">
          Job Experience
        </h1>
        <p className="max-w-[500px] text-center text-lg">
          Below is an overview of my professional journey, highlighting key
          roles and experiences that have shaped my career.
        </p>
        <div className="flex items-center max-w-[1100px]">
          <Timeline
            className="pf-timeline"
            value={events}
            content={(item) => (
              <ContentTemplate contentProp={item}></ContentTemplate>
            )}
          ></Timeline>
          <span></span>
        </div>
      </div>
      <div className="bg-zinc-800 flex flex-col justify-start items-center gap-10 w-full">
        <h1 className="averta text-3xl text-indigo-300 text-center">
          My Skills
        </h1>
        <p className="max-w-[500px] text-justify text-lg">
          Proficient in technology and web development, with strong
          communication skills in English. Dedicated to continuous learning and
          delivering creative, effective solutions.
        </p>
        <ul className="flex flex-col w-full gap-3 max-w-[650px]">
          <li className="w-full">
            <h1 className="flex items-center text-2xl gap-1 mb-4">
              <i className="isax-bold-arrow-right-1 text-indigo-400 hover:translate-x-[5px] transition-transform duration-300 cursor-pointer"></i>
              <span className="averta text-indigo-400">Tech Skills</span>
            </h1>
            <PanelMenu
              model={skillItems}
              className="pf-panel-menu w-full"
            ></PanelMenu>
          </li>
          <li className="w-full">
            <h1 className="flex items-center text-2xl gap-1 mb-4">
              <i className="isax-bold-arrow-right-1 text-indigo-400 hover:translate-x-[5px] transition-transform duration-300 cursor-pointer"></i>
              <span className="averta text-indigo-400">Language Skills</span>
            </h1>
            <PanelMenu
              model={languageSkills}
              className="pf-panel-menu w-full"
            ></PanelMenu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobExperience;
