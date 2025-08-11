import {useContext} from 'react'
import { ThemeContext } from '../context/Theme.jsx'
import light from '../assets/sun.svg'
import dark from '../assets/moon.svg'
const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  

  return (
   <div className="relative w-12 h-6 my-auto mr-3">
  <input
    id="darkmode-toggle"
    type="checkbox"
    className="sr-only peer"
    onChange={toggleTheme}
    checked={theme === "dark" ? true : false}
  />
  {/* track */}
  <div className="absolute inset-0 bg-blue-950 rounded-full peer-checked:bg-gray-700 transition-colors duration-300"></div>
  {/* thumb */}
  <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-6"></span>
  <label
    htmlFor="darkmode-toggle"
    className="absolute inset-0 cursor-pointer"
  >{theme === "light" ?
   <img src={dark} alt="light-mode icon"  className='translate-x-6'/> : 
   <img src={light} alt="dark-mode icon" />
   }</label>
</div>
  )
}

export default ToggleSwitch;