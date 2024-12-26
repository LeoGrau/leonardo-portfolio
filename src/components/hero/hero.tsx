import "./hero.css";

function Hero() {
  const meUrl =
    "https://cdn.discordapp.com/attachments/1261042788880089100/1321302559398563990/20220730_132253_721.jpg?ex=676cbe66&is=676b6ce6&hm=ca849018d4aca785d153c1acc9e7e9be080f178f2ac707102a4274b62ababfb3&";
  return (
    <>
      <div className="bg-zinc-900 h-full flex justify-center items-center]">
        <div className="flex flex-col items-center justify-center max-w-[808px]">
          <div className="rounded-full overflow-hidden w-[200px] h-[200px] mb-3">
            <img
              className="w-[251px] -translate-y-1/4 scale-[2] translate-x-[25px]"
              src={meUrl}
              alt=""
            />
          </div>
          <h1 className="text-white text-4xl">Leonardo Manuel Grau Vargas</h1>
          <span className="text-white text-center">
            Desarrollador web y móvil apasionado por crear soluciones
            eficientes, con atención al detalle y un amor por los teclados
            mecánicos.
          </span>
        </div>
      </div>
    </>
  );
}

export default Hero;
