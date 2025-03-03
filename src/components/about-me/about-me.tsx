import "./about-me.css";

import imageUrl from "@/assets/images/me2.png";

const planguages = [
  { label: "Javascript" },
  { label: "Typescript" },
  { label: "C#" },
  { label: "Python" },
  { label: "Kotlin" },
  { label: "Java" },
];

const toolsNFrameworks = [
  { label: "Vue" },
  { label: "React" },
  { label: "Android" },
];

function AboutMe() {
  return (
    <>
      <div
        id="about-me"
        className="flex h-fit py-[110px] justify-center items-center bg-zinc-800 text-gray-300 w-full px-[20px] md:px-[60px]"
      >
        <div className="max-w-[900px] grid grid-cols-1 lg:grid-cols-2 justify-center gap-[100px] items-center w-full">
          <div className="w-full lg:w-[410px] flex flex-col">
            <h1 className="text-3xl mb-3 font-averta-bold text-indigo-300 flex items-center gap-2">
              <i className="isax-bold-arrow-right-1 hover:translate-x-[5px] transition-transform duration-300 cursor-pointer"></i>
              <span>About Me</span>
            </h1>
            <p className="text-lg text-justify">
              Hola, soy <span className="text-indigo-400">Leonardo Grau</span>,
              tengo 24 años y soy de Perú. Me apasiona{" "}
              <span className="text-indigo-400">
                aprender, superar desafíos y crecer en todo lo que hago
              </span>
              . Disfruto trabajar en equipo, aportar ideas y mantener un
              equilibrio entre lo personal y lo profesional. Siempre busco
              mejorar y disfrutar del proceso.
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-indigo-300">
                <i className="isax-bold-sms text-2xl"></i>
                <span>leonardo.grau.outlook.com.pe</span>
              </li>
              <li className="flex items-center gap-2 text-indigo-300">
                <i className="isax-bold-cake text-2xl"></i>
                <span>January 22, 2000</span>
              </li>
              <li className="flex items-center gap-2 text-indigo-300">
                <i className="isax-bold-location text-2xl"></i>
                <span>Lima, Peru</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center cursor-pointer">
            <div className="relative inline-block w-fit">
              <div className="absolute top-2 left-2 w-full h-full rounded-xl border-2 border-indigo-800 bg-indigo-600 bg-opacity-10"></div>
              <img
                className="max-w-[320px] w-full rounded-xl relative z-10"
                src={imageUrl}
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center w-full row-start-4 lg:row-start-auto">
            <div className="border-indigo-400 border h-full rounded-xl p-5 flex flex-col w-full max-w-[300px] md:max-w-[380px]">
              <h3 className="text-indigo-300 mb-2">Programming Languages</h3>
              <ul className="grid grid-cols-2">
                {planguages.map((pl) => (
                  <li className="skill">{pl.label}</li>
                ))}
              </ul>
              <h3 className="text-indigo-300 mb-2 mt-4">
                Frameworks and Tools
              </h3>
              <ul className="grid grid-cols-2">
                {toolsNFrameworks.map((pl) => (
                  <li className="skill">{pl.label}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[410px] flex flex-col">
            <h1 className="text-3xl mb-3 font-averta-bold text-indigo-300 flex items-center gap-2">
              <i className="isax-bold-arrow-right-1 hover:translate-x-[5px] transition-transform duration-300 cursor-pointer"></i>
              <span>Technical Information</span>
            </h1>
            <p className="text-lg text-justify">
              Soy desarrollador web/mobile con experiencia en tecnologías como{" "}
              <span className="text-indigo-400">
                Vue, PrimeVue, .NET, Flutter
              </span>{" "}
              y <span className="text-indigo-400">Android Kotlin.</span> También
              tengo conocimientos en gestores de bases de datos como{" "}
              <span className="text-indigo-400">MariaDB y MySQL</span>, así como
              en <span className="text-indigo-400">Linux</span>. Me enfoco en
              crear soluciones prácticas y eficientes, con un diseño
              minimalista. Siempre estoy aprendiendo y buscando nuevos desafíos
              para mejorar mis habilidades y aportar valor en cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
