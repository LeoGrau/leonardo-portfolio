import { Component, ReactNode } from "react";
import ProjectCardComponent from "./project-card/project-card";

import receiptAppSS from "../../assets/images/project-images/receipt-app-shot.png";
import orlandoWSSS from "../../assets/images/project-images/orlando-shot.png";

interface MyProjectsProps {
  string: "";
}

const projects = [
  {
    projectName: "Receipt App v1.0",
    description:
      "The app allows creating, managing, and exporting receipts as PDFs. It includes currency and document type customization, user association, and data updates. Ideal for businesses needing to issue and print receipts efficiently.",
    techs: [
      { name: "PrimeReact" },
      { name: "React" },
      { name: ".NET" },
      { name: "MySQL" },
      { name: "Axios" },
    ],
    links: [
      {
        icon: "pi pi-github",
        url: "https://github.com/LeoGrau/ReceiptApp.git"
      },
    ],
    image: receiptAppSS,
  },
  {
    projectName: "Orlando Web Site",
    description:
      "El sitio web de Orlando es minimalista, destacando sus platos y sucursales en Nasca y Vista Alegra, Perú. Con un diseño limpio y fotos de calidad, permite explorar el menú y encontrar la ubicación más cercana.",
    techs: [{ name: "Primevue" }, { name: "Vue" }, { name: "TailwindCSS" }],
    links: [
      {
        icon: "pi pi-github",
        url: "https://github.com/LeoGrau/orlando-website"
      },
    ],
    image: orlandoWSSS,
  },
];

class MyProjects extends Component {
  constructor(props: MyProjectsProps) {
    super(props);
    this.state = {
      message: "",
    };
  }


  render(): ReactNode {
    return (
      <div id="projects" className="bg-zinc-900 p-5 min-h-fit h-full flex items-center justify-center flex-col px-[20px] md:px-[60px] py-[110px]">
        <h1 className="averta font-bold text-indigo-300 text-4xl text-center mb-2">
          My Projects
        </h1>
        <p className="text-white text-center mb-8 text-lg">
          A collection of projects I've worked on.
        </p>
        <div className="flex flex-wrap gap-11 justify-center items-center z-0">
          {projects.map((p, index) => (
            <ProjectCardComponent
              key={index}
              projectCard={p}
            ></ProjectCardComponent>
          ))}
        </div>
      </div>
    );
  }
}

export default MyProjects;
