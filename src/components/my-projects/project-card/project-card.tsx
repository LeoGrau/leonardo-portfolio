type Tech = {
  name: string
}

type Link = {
  icon: string
  url: string
}

type ProjectCard = {
  projectName: string;
  description: string;
  image: string;
  techs: Array<Tech>;
  links: Array<Link>;
};

interface ProjectCardProps {
  projectCard: ProjectCard;
}

function openProject(url: string) {
  window.open(url, "_blank")
}

const MinimalProjectCard = ({projectCard}: ProjectCardProps) => {
  return (
    <div id="projects" className="relative">
        <div className="flex flex-col justify-between border border-opacity-55 border-indigo-500 rounded-lg p-5 bg-indigo-900 bg-opacity-45 items-left z-50 absolute text-white w-[450px] h-full text-base">
          <span className="averta text-indigo-400">{projectCard.projectName}</span>
          <span>
          {projectCard.description}
          </span>
          <ul className="flex flex-wrap gap-2 text-indigo-300">
            {projectCard.techs.map((l, index) => (
              <li key={index}>
                <span>{l.name}</span>
              </li>
            ))}
          </ul>
          <ul className="flex">
            {projectCard.links.map((l, index) => (
              <li key={index}>
                <i onClick={() => openProject(l.url)} className={`${l.icon} text-2xl hover:text-indigo-500 transition-colors duration-300 cursor-pointer`}></i>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[450px] relative top-0 z-10 h-[270px] overflow-hidden rounded-xl">
          <div className="bg-opacity-90 absolute w-full h-full bg-zinc-800"></div>
          <img className="rounded-xl" src={projectCard.image} alt="" />
        </div>
      </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const ExtendProjectCard = () => {
//   return (
//     <>
//       {projects.map((p) => (
//         <div className="text-white max-w-[1000px] flex">
//           <div className="w-[45%] relative z-50 translate-x-[50px]">
//             <h3 className="averta text-indigo-300 text-2xl mb-3 flex items-center gap-2">
//               <i className="isax-bold-arrow-right-1"></i>
//               <span>{p.projectName}</span>
//             </h3>
//             <div className="border border-indigo-500 rounded-lg p-5 bg-indigo-900 bg-opacity-45 min-h-[180px] flex items-center">
//               <span>
//                 A minimalistic and fun application built with React and
//                 PrimeReact , using JavaScript. Integrated with Axios for
//                 seamless communication with a .NET API, perfect for showcasing
//                 in job interviews.
//               </span>
//             </div>
//             <ul className="flex flex-wrap gap-2 mt-3">
//               {p.techs.map((t) => (
//                 <li>• {t.name}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="image-container relative w-[55%]">
//             <div className="bg-opacity-90 absolute w-full h-full bg-zinc-800 rounded-xl"></div>
//             <img className="rounded-xl" src={receiptAppSS} alt="" />
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

const ProjectCardComponent = (props: ProjectCardProps) => {
  return (
    <div>
      <MinimalProjectCard projectCard={props.projectCard}></MinimalProjectCard>
      {/* <ExtendProjectCard></ExtendProjectCard> */}
      {/*  */}
    </div>
  );
};

export default ProjectCardComponent;
