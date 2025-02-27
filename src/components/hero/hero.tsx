import "./hero.css";
import meUrl from "@/assets/images/me.jpg";

import cv from "@/assets/pdfs/Leonardo Manuel Grau Vargas - CV.pdf";

const texts = [
  {
    words: [
      "Vue",
      "Javascript",
      "Typescript",
      "React",
      "Axios",
      "Primevue",
      "JSX",
    ],
    animationName: "scroll-left",
  },
  {
    words: [
      "Vue",
      "Javascript",
      "Typescript",
      "React",
      "Axios",
      "Primevue",
      "JSX",
    ],
    animationName: "scroll-right",
  },
  {
    words: [".NET", "C#", "Swagger", "React", "Axios", "Primevue", "JSX"],
    animationName: "scroll-left",
  },
];

function AnimatedBackground() {
  return (
    <div className="h-full origin-top flex flex-col gap-[150px] absolute justify-center w-screen z-[10]">
      {texts.map((t, index) => (
        <div key={index} className="flex gap-[70px] overflow-hidden">
          <ul
            className={`flex ${t.animationName} min-w-full justify-between items-center flex-shrink-0 gap-[70px] o`}
          >
            {t.words.map((w, index) => (
              <li
                key={`o-${index}`}
                className="porter-sans inline-block text-white text-8xl opacity-15 whitespace-nowrap"
              >
                {`${w} • `}
              </li>
            ))}
          </ul>
          <ul
            className={`flex ${t.animationName} min-w-full justify-between items-center flex-shrink-0 gap-[70px] c`}
          >
            {t.words.map((w, index) => (
              <li
                key={`c-${index}`}
                className="porter-sans inline-block text-white text-8xl opacity-15 whitespace-nowrap"
              >
                {`${w} • `}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function openCv() {
  window.open(cv, "_blank");
}


function openLinkedinChat() {
  const linkedInProfile = "https://www.linkedin.com/in/leonardo-manuel-grau-vargas-35811a1a7/";
  window.open(linkedInProfile, "_blank")
}

function Hero() {
  return (
    <div className="relative bg-zinc-900 min-h-screen overflow-hidden z-[20] h-full">
      <AnimatedBackground></AnimatedBackground>
      <div className="relative flex flex-col items-center justify-center text-center z-10 h-full w-full px-[60px]">
        <div className="max-w-[808px] flex flex-col justify-center items-center">
          <div className="rounded-full overflow-hidden w-[200px] h-[200px] mb-3">
            <img
              className="w-[251px] translate-y-[30px] scale-[2] translate-x-[25px]"
              src={meUrl}
              alt="Foto de Leonardo Grau Vargas"
            />
          </div>
          <h1 className="text-white text-4xl mb-3 averta font-extrabold">
            Leonardo Grau Vargas
          </h1>
          <span className="text-white">
            Desarrollador web y móvil apasionado por crear soluciones
            eficientes, con atención al detalle y un amor por los teclados
            mecánicos.
          </span>
          <div className="flex gap-3 mt-4 min-w-[400px]">
            <button className="bg-zinc-700 rounded-md py-3 px-5 w-full transition-colors hover:bg-indigo-600">
              <span className="text-white" onClick={openCv}>
                Download CV
              </span>
            </button>
            <button className="bg-zinc-700 rounded-md w-full transition-colors hover:bg-indigo-600">
              <span className="text-white" onClick={openLinkedinChat}>Hire Me</span>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center bottom-[20px] w-full">
        <i className="pi pi-chevron-down text-white text-3xl"></i>
      </div>
    </div>
  );
}

export default Hero;
