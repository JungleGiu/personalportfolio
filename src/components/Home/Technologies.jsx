import React from 'react'
   import {DiReact} from 'react-icons/di'
   import {RiTailwindCssFill} from 'react-icons/ri'
   import {SiReactrouter} from 'react-icons/si'
   import { SiVite } from "react-icons/si";
   import { DiCss3 } from "react-icons/di";
   import { SiNextdotjs } from "react-icons/si";
export const Technologies = () => {
  return (
    <div className='flex flex-col justify-center align-middle items-center mt-40 text-blue-950 dark:text-gray-200'>
        <h3>This portfolio website is built with</h3>
        <div className='flex flex-col justify-center items-center '>
            <div>
<DiReact className="inline text-3xl" /> <RiTailwindCssFill className="inline text-3xl" /> <SiReactrouter className="inline text-3xl" /> <DiCss3 className="inline text-3xl" /> <SiVite className="inline text-3xl" />  
       </div>
        </div>
        <p>coming soon V 2.0 implementing SSR and more...</p>
<SiNextdotjs className="inline text-3xl" />
    </div>
  )
}
