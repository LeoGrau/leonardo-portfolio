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
    <div className="h-full origin-top flex flex-col gap-[150px] absolute justify-center w-full z-[10]">
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
  const linkedInProfile =
    "https://www.linkedin.com/in/leonardo-manuel-grau-vargas-35811a1a7/";
  window.open(linkedInProfile, "_blank");
}

function Hero() {
  return (
    <div className="relative bg-zinc-900 min-h-[600px] h-[calc(100vh)] overflow-hidden z-[20] w-full">
      <AnimatedBackground></AnimatedBackground>
      <div className="relative flex flex-col items-center justify-center text-center z-10 h-full w-full px-[60px]">
        <div className="max-w-[808px] flex flex-col justify-center items-center h-full">
          <div className="rounded-full overflow-hidden h-[25%] max-w-[251px] max-h-[251px] aspect-square mb-3">
            <img
              className="w-full translate-y-[10%] scale-[2] translate-x-[15%] mdh:hero-image origin-center"
              src={meUrl}
              alt="Foto de Leonardo Grau Vargas"
            />
          </div>
          <h1 className="text-white text-3xl md:text-4xl mb-3 averta font-extrabold">
            Leonardo Grau Vargas
          </h1>
          <span className="text-white w-[300px] md:w-auto max-w-[610px]">
            Desarrollador web y móvil apasionado por crear soluciones
            eficientes, con atención al detalle y un amor por los teclados
            mecánicos.
          </span>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center gap-3 mt-4 min-w-[400px]">
              <button className="bg-zinc-700 rounded-md py-3 px-5 w-full max-w-[300px] transition-colors hover:bg-indigo-600">
                <span className="text-white" onClick={openCv}>
                  Download CV
                </span>
              </button>
              <button className="bg-zinc-700 rounded-md py-3 px-5 w-full max-w-[300px] transition-colors hover:bg-indigo-600">
                <span className="text-white" onClick={openLinkedinChat}>
                  Hire Me
                </span>
              </button>
            </div>
            <div className="absolute flex justify-center bottom-[10px] inset-x-0 h-[30px] my-4">
              <i className="pi pi-chevron-down text-white text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
