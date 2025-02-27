import "./sidebar-dock.css";

const dockOptions = [
  { icon: "pi pi-instagram", link: "https://www.instagram.com/leograu.js/" },
  { icon: "pi pi-github", link: "https://github.com/LeoGrau" },
  {
    icon: "pi pi-linkedin",
    link: "https://www.linkedin.com/in/leonardo-manuel-grau-vargas-35811a1a7/",
  },
  { icon: "pi pi-slack", link: "" },
  { icon: "pi pi-youtube", link: "" },
];

function SidebarDock() {
  return (
    <>
      <div className="md:fixed md:w-fit md:left-0 md:top-[50%] md:translate-y-[-50%] md:z-50 md:bg-zinc-950 flex md:flex-col md:gap-4 md:rounded-r-lg md:px-3 md:py-6 md:mt-0 md:text-slate-200 gap-3 mt-3">
        {dockOptions.map((item, index) => (
          <a
            key={index}
            target="_blank"
            className="cursor-pointer"
            href={item.link}
          >
            <i
              className={`${item.icon} md:text-2xl text-xl hover:text-indigo-500 transition-colors`}
            ></i>
          </a>
        ))}
      </div>
    </>
  );
}

export default SidebarDock;
