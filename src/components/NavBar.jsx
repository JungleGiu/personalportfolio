import { Link } from 'react-router-dom';
import  ToggleSwitch  from './ToggleSwitch'; 
const NavBar = () => {

  return (
    <nav className="flex justify-between items-stretch h-15 dark:bg-violet-950  bg-white text-blue-950 border-2 ">
      <div className="text-lg font-bold h-full ">
        <h1 className="flex items-center h-full mr-10 pl-5 text-gray-200">Giú Eminente </h1>
      </div>
      <div className="text-sm">
        <ul className="flex space-x-8 divide-x h-full text-gray-200">
          <li className=" group flex items-center h-full pr-5 divide-x divide-blue-950">
            <a to="/" className='cursor-pointer'><span className='group-hover:animate-blink animate:none'>_</span>home</a>
          </li>
          <li className="flex items-center h-full pr-5 divide-x divide-blue-950">
            <a to="/projects">_projects</a>
          </li>
          <li className="flex items-center h-full pr-5">
            <a to="/skills">_skills</a>
          </li>
          <li className="flex items-center h-full pr-5">
            <a to="/experience">_experience</a>
          </li>
          <li className="flex items-center h-full pr-5">
            <a to="/about">_about</a>
          </li>
          <li className="flex items-center h-ful pr-5">
            <a to="/contact">_contact</a>
          </li>
        </ul>
      </div>
      <ToggleSwitch />
    </nav>
  )
}
export default NavBar;
