
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";
import {DiReact} from 'react-icons/di'
import {RiTailwindCssFill} from 'react-icons/ri'
import {SiReactrouter} from 'react-icons/si'
import { SiVite } from "react-icons/si";
import { ThemeContext } from "../context/Theme";
import { useContext } from "react";
export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
      <footer className="fixed bottom-0 h-14 w-full flex justify-between bg-teal-200 dark:bg-blue-950 dark:border-gray-200 border-blue-950 border-t-2">
      <div className="flex justify-start items-center h-full">
        <div className="px-7 h-full flex items-center border-r border-blue-950 dark:border-gray-200">
          <p className="text-blue-950 dark:text-gray-200">find me on:</p>
        </div>
        
        <a
          href="https://www.linkedin.com/in/gi%C3%BA-eminente-145530225"
          target="_blank"
          rel="noopener noreferrer"
           className="px-7 h-full flex items-center justify-center border-r border-blue-950 dark:border-gray-200 hover:bg-black/10"
        >
          <img
            src={linkedin}
            alt="linkedin icon"
            className="bg-white w-10 h-10 mask-fade-edges "
            
          />
        </a>
        <a
          href="https://github.com/JungleGiu"
          target="_blank"
          rel="noopener noreferrer"
                className="px-6 h-full flex items-center justify-center hover:bg-black/10"
        >
          <img
            src={github}
            alt="github icon"
            className={
              theme === "dark"
                ? "invert-colors w-10 h-10 "
                : "w-10 h-10 "
            }
          />
        </a>
      </div>
      <div className="flex justify-end items-center h-full">
        <div className="px-7 h-full flex items-center border-l border-blue-950 dark:border-gray-200">
          <p className="text-blue-950 text-xs dark:text-gray-200">This page is built with ReactJS <DiReact className="inline"/> TailwindCSS <RiTailwindCssFill className="inline"/> React Router <SiReactrouter className="inline"/> and Vite <SiVite className="inline"/> </p>
        </div>
      </div>
    </footer>
  );
};
