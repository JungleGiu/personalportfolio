import React from "react";

export const Education = () => {
  return (
    <div className="flex flex-col  text-blue-950 w-6/5 divide-y-2 divide-blue-950 dark:divide-gray-200">
      <div className="my-3">
        <h3 className="text-xl font-semibold  dark:text-gray-200">
          Master Full-Stack developer at Nuclio Digital School
        </h3>
        <p className="text-sm dark:text-gray-200">
          Online (Spain) - Feb-July 2025
        </p>
        <p className="mt-3 w-4/5 dark:text-gray-400 ">
          Intensive bootcamp focused on modern web development with JavaScript
          ecosystem. The program covers the complete full-stack development
          cycle through hands-on projects and agile methodologies.
        </p>

        <details className="mt-3 dark:text-gray-200">
          <summary>details</summary>
          <h4 className="text-md font-semibold mt-5 mb-2 dark:text-gray-200">
            Core Technologies & Skills{" "}
          </h4>
          <ul className="list-disc ml-5 ">
            <li className="dark:text-gray-200 mb-1 font-semibold">
              Frontend:
              <ul className="list-none flex  text-sm font-light gap-6 ml-5">
                <li>HTML5</li>
                <li>CSS3 (Flexbox/Grid)</li>
                <li>JavaScript ES6+</li>
                <li>React (Hooks, Router, Context)</li>
                <li>React Native</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold">
              Backend:
              <ul className="list-none  text-sm font-light flex gap-6 ml-5">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
                <li>WebSockets</li>
                <li>Microservices</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold">
              Databases:
              <ul className="list-none flex   text-sm font-light gap-6 ml-5">
                <li>MongoDB/Mongoose</li>
                <li>SQL databases</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold">
              DevOps & Tools:
              <ul className="list-none flex  text-sm font-light gap-6 ml-5">
                <li>Docker</li>
                <li>CI/CD deployment</li>
                <li>Cloud services</li>
                <li>Git/GitHub</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold">
              Modern Stack:
              <ul className="list-none flex  text-sm font-light gap-6 ml-5">
                <li>TypeScript</li>
                <li>Next.js (SSR)</li>
                <li>Testing (unit, integration, E2E)</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold">
              Security:
              <ul className="list-none flex  text-sm font-light gap-6 ml-5">
                <li>JWT authentication</li>
                <li>Session management</li>
                <li>Web security best practices</li>
              </ul>
            </li>
          </ul>
          <h4 className="text-md font-semibold mt-5 dark:text-gray-200">
            Project Based Learning{" "}
          </h4>
          <p className="dark:text-gray-400">
            {" "}
            Structured in 5 progressive sprints using agile methodologies
            (Scrum), culminating in a final capstone project presented to an
            industry panel. Professional Development: Includes soft skills
            training in leadership, personal branding, and effective
            communication to ensure career readiness.
          </p>
        </details>
      </div>
      <div className="my-3">
        <h3 className="text-xl font-semibold leading-top mt-5 dark:text-gray-200">
          Specialty in Front-End tecnologies ad IT Academy - Barcelona Activa
        </h3>
        <p className="text-sm dark:text-gray-200">
          {" "}
          BARCELONA (Spain) - June 2025 - Ongoing
        </p>
        <p className="mt-3 w-4/5 dark:text-gray-400">
          Professional training in Front-End technologies, including HTML5,
          CSS3, JavaScript, TypeScript and Angular, with a focus on web
          development and user interface design.
        </p>
        <details className="mt-3 dark:text-gray-200">
          <summary>details</summary>
          <h4 className="text-md font-semibold mt-5 mb-2 dark:text-gray-200">
            Core Technologies & Skills{" "}
          </h4>

          <ul className="list-disc ml-5">
            <li className="dark:text-gray-200 font-semibold">
              Frontend:
              <ul className="list-none text-sm font-light flex gap-6 ml-3">
                <li>HTML5</li>
                <li>CSS3 (Flexbox/Grid)</li>
                <li>SASS</li>
                <li>Tailwind</li>
                <li>JavaScript ES6+</li>
                <li>Typescript</li>
                <li>Angular</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold overflow-hidden">
              Other Technologies:
              <ul className="list-none flex  text-sm font-light align-text-bottom gap-6 ml-3">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
                <li>WebSockets</li>
                <li>MongoDB/Mongoose</li>
                <li>FireBase</li>
                <li>SupaBase</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold">
              DevOps & Tools:
              <ul className="list-none flex  text-sm font-light gap-6 ml-5">
                <li>Docker</li>
                <li>CI/CD deployment</li>
                <li>Terminal CLI</li>
                <li>Cloud services</li>
                <li>Git/GitHub</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold">
              Modern Stack:
              <ul className="list-none flex text-sm font-light gap-6 ml-5">
                <li>Error handling</li>
                <li>Next.js (SSR)</li>
                <li>Testing (unit, integration, E2E)</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold">
              Security:
              <ul className="list-none flex  text-sm font-light gap-6 ml-5">
                <li>JWT authentication</li>
                <li>Session management</li>
                <li>Web security best practices</li>
              </ul>
            </li>
          </ul>
          <h4 className="text-md font-semibold mt-5 dark:text-gray-200">
            Project Based Learning{" "}
          </h4>
          <p className="dark:text-gray-400">
            Structured in 9 progressive sprints in a authonomic learning
            environment, culminating in a final capstone project presented to an
            industry panel.
          </p>
        </details>
      </div>
      <div className="my-3">
        <h3 className="text-xl font-semibold mt-5 dark:text-gray-200">
          Fundamentals of Front-End tecnologies ad IT Academy - Barcelona Activa
        </h3>
        <p className="text-sm dark:text-gray-200">
          Online (Spain) - March-May 2025
        </p>
        <p className="mt-3 w-4/5 dark:text-gray-400">
          Comprehensive foundation course covering programming fundamentals,
          algorithmic thinking, and core web technologies with emphasis on
          problem-solving and clean code practices.
        </p>
        <details className="mt-3 dark:text-gray-200">
          <summary>details</summary>
          <h4 className="text-md font-semibold mt-5 mb-2 dark:text-gray-200">
            Core Technologies & Skills
          </h4>
          <ul className="list-disc ml-5">
            <li className="dark:text-gray-200 font-semibold">
              Programming Fundamentals:
              <ul className="list-none text-sm font-light flex gap-6 ml-3 my-1">
                <li>JavaScript ES6+</li>
                <li>Data Types</li>
                <li>Variables & Scope</li>
                <li>Functions</li>
                <li>Control Structures</li>
                <li>Loops & Iterations</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold">
              Object-Oriented Programming:
              <ul className="list-none flex text-sm font-light align-text-bottom gap-6 ml-3 my-1">
                <li>Classes & Objects</li>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>Encapsulation</li>
                <li>Prototypes</li>
                <li>Design Patterns</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold mb-">
              Data Structures & Algorithms:
              <ul className="list-none flex text-sm font-light gap-4 ml-5 my-1 ">
                <li>Arrays & Objects</li>
                <li>Linked Lists</li>
                <li>Stacks & Queues</li>
                <li>Sorting Algorithms</li>
                <li>Search Algorithms</li>
                <li>Recursion</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold">
              Web Foundations:
              <ul className="list-none flex text-sm font-light gap-6 ml-5 my-1">
                <li>HTML5 Semantics</li>
                <li>DOM Manipulation</li>
                <li>Event Handling</li>
              </ul>
            </li>
            <li className="dark:text-gray-200 font-semibold">
              Development Tools:
              <ul className="list-none flex text-sm font-light gap-6 ml-5 my-1">
                <li>Code Editors</li>
                <li>Browser DevTools</li>
                <li>Debugging Techniques</li>
              </ul>
            </li>
          </ul>
          <h4 className="text-md font-semibold mt-5 dark:text-gray-200">
            Learning Methodology
          </h4>
          <p className="dark:text-gray-400">
            Hands-on approach with progressive exercises, coding challenges, and
            mini-projects to reinforce theoretical concepts through practical
            application and problem-solving, selective final examination
            assessment with limited time.
          </p>
        </details>
      </div>
    </div>
  );
};
