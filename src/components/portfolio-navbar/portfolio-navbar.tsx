import { useEffect, useRef, useState } from "react";
import "./portfolio-navbar.css";

// import colors from "tailwindcss/colors"

import imageUrl from "@/assets/images/me.jpg";
const navBarOptions = [
  { label: "About Me", key: 0, id: "about-me" },
  { label: "Experience", key: 1, id: "experience" },
  { label: "Projects", key: 2, id: "projects" },
  // { label: "Contact Me", key: 4, id: "#about-me"  },
];

function toggleMenu(
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
) {
  setShowMenu((prev) => {
    prev = !prev;
    console.log("Prev", prev);
    return prev;
  });
}

function PortfolioNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (mouseEvent: MouseEvent) => {
      console.log("event", mouseEvent.target);
      console.log("ref", buttonRef.current);
      if (
        menuRef.current &&
        !menuRef.current!.contains(mouseEvent.target as Node) && 
        !buttonRef.current?.contains(mouseEvent.target as Node)
      ) {
        console.log("Get in");
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="fixed h-[70px] w-full bg-indigo-950 px-5 flex justify-between items-center text-gray-300 z-40">
        <div className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden h-[40px] w-[40px]">
            <img src={imageUrl} alt="" />
          </div>
          <span className="aptos font-semibold">Leonardo Grau</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            ref={buttonRef}
            onClick={() => toggleMenu(setShowMenu)}
            className={`flex lg:hidden transition-transform duration-700 items-center ${
              !showMenu ? "rotate-[360deg]" : "rotate-[0deg]"
            }`}
          >
            <i className="isax-bold-menu text-lg"></i>
          </button>
          <ul
            ref={menuRef}
            className={`${
              !showMenu ? "max-h-0" : "max-h-[500px]"
            } transition-all duration-700 overflow-hidden w-full lg:max-h-max lg:transition-none flex flex-col lg:flex-row items-center justify-center lg:p-0 lg:gap-6 lg:text-sm bg-slate-900 lg:bg-transparent absolute lg:relative left-0 top-[70px] lg:top-0`}
          >
            {navBarOptions.map((nbo) => (
              <li
                className="transition-colors duration-200 ease-in hover:bg-slate-950 lg:hover:bg-transparent w-full lg:w-max text-center cursor-pointer"
                key={nbo.key}
              >
                <a href={`#${nbo.id}`} className="w-full block py-4">{nbo.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default PortfolioNavbar;
