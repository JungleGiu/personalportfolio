
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";
import { ThemeContext } from "../context/Theme";
import { useContext } from "react";
export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
      <footer className="fixed bottom-0 h-14 w-full flex justify-between backdrop-blur-md dark:backdrop-blur-md bg-opacity-70  dark:border-gray-200 border-blue-950 border-t-2">
      <div className="flex justify-start items-center h-full">
        <div className="px-7 h-full flex items-center border-r border-blue-950 dark:border-gray-200">
          <p className="text-blue-950 dark:text-gray-200">find me on:</p>
        </div>
        
        <a
          href="https://www.linkedin.com/in/giu-eminente/"
          target="_blank"
          rel="noopener noreferrer"
           className="px-3 h-full flex items-center justify-center border-r border-blue-950 dark:border-gray-200 hover:bg-black/10"
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
                className="px-3 h-full flex items-center  border-r-2 border-blue-950 dark:border-gray-200 justify-center hover:bg-black/10"
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
      </div>
    </footer>
  );
};
