import NavBar from "../components/NavBar";
import{ Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";
import { useState } from "react";   

export const About = () => {
    const [category, setCategory] = useState([]);
  return (
    <div>
      <NavBar/>
      <div className="flex flex-row">
      <SideBar categories={["education", "background", "skills"]} setCategory={setCategory} cat="aboutMe"/>
      <main className="w-4/5 h-screen p-10">
        <h1 className="text-2xl font-semibold capitalize dark:text-gray-200">{category}</h1>
<div className="mt-5">
{category === "education" && (
    <div>
  <div>
    <h3 className="text-lg font-semibold  dark:text-gray-200"> Master Full-Stack developer at Nuclio Digital School</h3>
    <p className="text-sm dark:text-gray-200"> Online (Spain) - 2025</p>
<p className="mt-5 w-4/5 ">Intensive bootcamp focused on modern web development with JavaScript ecosystem. 
The program covers the complete full-stack development cycle through hands-on projects and agile methodologies.
</p>

<details className="mt-5">
     <summary>details</summary>
<h4 className="text-md font-semibold mt-5 dark:text-gray-200">Core Technologies & Skills </h4>

<ul className="list-disc ml-5">
  <li className="dark:text-gray-200 font-semibold">Frontend:
    <ul className="list-none flex gap-6 ml-5">
      <li>HTML5</li>
      <li>CSS3 (Flexbox/Grid)</li>
      <li>JavaScript ES6+</li>
      <li>React (Hooks, Router, Context)</li>
      <li>React Native</li>
    </ul>
  </li>
  <li className="dark:text-gray-200 font-semibold">Backend:
    <ul className="list-none flex gap-6 ml-5">
      <li>Node.js</li>
      <li>Express.js</li>
      <li>REST APIs</li>
      <li>WebSockets</li>
      <li>Microservices</li>
    </ul>
  </li>
  <li className="dark:text-gray-200 font-semibold">Databases:
    <ul className="list-none flex gap-6 ml-5">
      <li>MongoDB/Mongoose</li>
      <li>SQL databases</li>
    </ul>
  </li>
  <li className="dark:text-gray-200 font-semibold">DevOps & Tools:
    <ul className="list-none flex gap-6 ml-5">
      <li>Docker</li>
      <li>CI/CD deployment</li>
      <li>Cloud services</li>
      <li>Git/GitHub</li>
    </ul>
  </li>
  <li className="dark:text-gray-200 font-semibold">Modern Stack:
    <ul className="list-none flex gap-6 ml-5">
      <li>TypeScript</li>
      <li>Next.js (SSR)</li>
      <li>Testing (unit, integration, E2E)</li>
    </ul>
  </li>
  <li className="dark:text-gray-200 font-semibold">Security:
    <ul className="list-none flex gap-6 ml-5">
      <li>JWT authentication</li>
      <li>Session management</li>
      <li>Web security best practices</li>
    </ul>
  </li>
</ul>
<h4 className="text-md font-semibold mt-5 dark:text-gray-200">Project Based Learning </h4>
Structured in 5 progressive sprints using agile methodologies (Scrum), culminating in a final capstone project presented to an industry panel.
Professional Development:
Includes soft skills training in leadership, personal branding, and effective communication to ensure career readiness.
</details>
  </div>
<div>
  <h3 className="text-lg font-semibold  dark:text-gray-200">Specialty in Front-End tecnologies ad IT Academy - Barcelona Activa </h3>
  <p className="text-sm dark:text-gray-200"> BARCELONA (Spain) - 2025 - Ongoing </p>
  <p className="mt-5 w-4/5 ">
</p>
</div>
    </div>
)}
{category === "background" && (
<div>
  <h3 className="text-lg font-semibold  dark:text-gray-200"> Master Full-Stack developer at Nuclio Digital School</h3>
  <p className="text-sm dark:text-gray-200"> BARCELONA (Spain) - 2025</p>
  <p className="mt-5 w-4/5 ">Intensive bootcamp focused on modern web development with JavaScript ecosystem. 
The program covers the complete full-stack development cycle through hands-on projects and agile methodologies.
</p>
</div>
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

