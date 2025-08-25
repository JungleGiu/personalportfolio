import NavBar from "../components/NavBar";
import{ Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";
import { useState } from "react";   
import { Education } from "../components/Education";
export const About = () => {
    const [category, setCategory] = useState([]);
  return (
    <div>
      <NavBar/>
      <div className="flex flex-row min-h-screen">
      <SideBar categories={["education", "background", "skills"]} setCategory={setCategory} cat="aboutMe"/>
      <main className="flex-1 w-4/5 p-10 mb-14">
        <h1 className="text-2xl font-semibold capitalize dark:text-gray-200">{category}</h1>
<div className="mt-5">
{category === "education" && (
   <Education/>
)}

{category === "skills" && (
<div>
  <h3 className="text-lg font-semibold  dark:text-gray-200"> Master Full-Stack developer at Nuclio Digital School</h3>
  <p className="text-sm dark:text-gray-200"> BARCELONA (Spain) - 2025</p>
  <p className="mt-5 w-4/5 ">Intensive bootcamp focused on modern web development with JavaScript ecosystem. 
The program covers the complete full-stack development cycle through hands-on projects and agile methodologies.
</p>
</div>
  
)}
</div>
      </main>
      </div>
      <Footer/>
    </div>
  )
}

