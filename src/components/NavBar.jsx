import { Link } from 'react-router-dom';
import  ToggleSwitch  from './ToggleSwitch'; 
const NavBar = () => {

  return (
    <nav className="flex justify-between min-h-16 items-stretch h-15   text-blue-950 dark:border-gray-200 border-blue-950 border-2 ">
      <div className="text-lg font-bold ">
        <h1 className="flex items-center  h-full mr-10 pl-5 text-blue-950 dark:text-gray-200">giúEminente </h1>
      </div>
      <div className="text-sm">
        <ul className="flex space-x-8 divide-x h-full dark:text-gray-200 dark:divide-gray-200 text-blue-950 divide-blue-950">
          <li className=" group flex items-center h-full pr-5 divide-x" >
            <Link to="/" className='cursor-pointer pl-2'><span className='group-hover:animate-blink animate:none'>_</span>home</Link>
          </li>
          <li className="group flex items-center h-full pr-5 divide-x divide-blue-950">
            <Link to="/projects" className='cursor-pointer pl-2'><span className='group-hover:animate-blink animate:none'>_</span>projects</Link>
          </li>
          <li className="group flex items-center h-full pr-5">
            <Link to="/about" className='cursor-pointer pl-2'><span className='group-hover:animate-blink animate:none'>_</span>about</Link>
          </li>
          <li className=" group flex items-center h-ful pr-5">
            <a to="/contact" className='cursor-pointer pl-2'><span className='group-hover:animate-blink animate:none'>_</span>contact</a>
          </li>
        </ul>
      </div>
      <ToggleSwitch />
    </nav>
  )
}
export default NavBar;
