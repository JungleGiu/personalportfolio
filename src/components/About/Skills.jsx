import React from "react";
import { FaUser, FaTools } from "react-icons/fa";
import {FaHtml5, FaCss3, FaJs, FaReact, FaAngular, FaNodeJs, FaGithub , FaGit, FaPython,  } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiJest } from "react-icons/si";
import { TbApi, TbBrandSocketIo , TbSql } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { FaCircleInfo } from "react-icons/fa6";
export const Skills = () => {
  return (
    <div className="mt-10 text-blue-950 ">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="w-5/6">
         <h2 className="inline text-2xl  font-semibold dark:text-gray-200 mb-6 border-b-2 pb-2">
           <FaTools className="inline" />   Technical Skills
          </h2>

          <div className="my-6">
            <h3 className="text-lg font-medium text-gray-400 mb-3">
              Frontend Development
            </h3>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  HTML5 <FaHtml5 className="inline" /> & CSS3 <FaCss3 className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Expert</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full w-11/12"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  JavaScript ES6+ <FaJs className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Expert</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full w-11/12"></div>
              </div>
            </div>

            
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  React <FaReact className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Advanced</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full w-4/5"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Tailwind CSS <SiTailwindcss className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Advanced</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full w-4/5"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Angular <FaAngular className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Intermediate</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full w-3/5"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  TypeScript <SiTypescript className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Intermediate</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full w-3/5"></div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-400 mb-3">
              Backend Development
            </h3>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Node.js <FaNodeJs className="inline" /> & Express <SiExpress className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Advanced</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-700 h-2 rounded-full w-4/5"></div>
              </div>
            </div>


            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  REST APIs <TbApi className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Advanced</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-700 h-2 rounded-full w-4/5"></div>
              </div>
            </div>

    <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                 NextJS  <RiNextjsFill className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Intermediate</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-700 h-2 rounded-full w-3/5"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Python <FaPython className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Beginner</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-700 h-2 rounded-full w-2/5"></div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-400 mb-3">
              Databases & Tools
            </h3>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  MongoDB <SiMongodb className="inline" /> & Mongoose <SiMongoose className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Advanced</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Git <FaGit className="inline" /> & GitHub <FaGithub className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Advanced</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Testing <SiJest className="inline" /> & Debugging
                </span>
                <span className="text-sm dark:text-gray-400">Advanced</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>

                 <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                SQL Databases <TbSql className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Intermediate</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
              </div>
            </div>

                 <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  WebSockets <TbBrandSocketIo className="inline" />
                </span>
                <span className="text-sm dark:text-gray-400">Intermediate</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-5/6">
        <h2 className="inline text-2xl  font-semibold dark:text-gray-200 mb-6 border-b-2 pb-2">
           <FaUser className="inline" />   Soft Skills
          </h2>

          <div className="my-6">
            <h3 className="text-lg font-medium text-gray-400 mb-3">
              Communication
            </h3>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Italian (Native)
                </span>
                <span className="text-sm dark:text-gray-400">Native</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-full"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Spanish
                </span>
                <span className="text-sm dark:text-gray-400">Fluent</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-5/6"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  English
                </span>
                <span className="text-sm dark:text-gray-400">Fluent</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-5/6"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Technical Communication
                </span>
                <span className="text-sm dark:text-gray-400">Advanced</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-400 mb-3">
              Problem Solving & Technical
            </h3>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Debugging & Troubleshooting
                </span>
                <span className="text-sm dark:text-gray-400">Expert</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-11/12"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Analytical Thinking
                </span>
                <span className="text-sm dark:text-gray-400">Advanced</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-4/5"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Attention to Detail
                </span>
                <span className="text-sm dark:text-gray-400">Expert</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-11/12"></div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-400 mb-3">
              Collaboration & Adaptability
            </h3>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Team Collaboration
                </span>
                <span className="text-sm dark:text-gray-400">Expert</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-11/12"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Cross-Cultural Awareness
                </span>
                <span className="text-sm dark:text-gray-400">Expert</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-11/12"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Continuous Learning
                </span>
                <span className="text-sm dark:text-gray-400">Expert</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-11/12"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Working Under Pressure
                </span>
                <span className="text-sm dark:text-gray-400">Expert</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-11/12"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">
                  Agile Methodologies
                </span>
                <span className="text-sm dark:text-gray-400">Intermediate</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-950 h-2 rounded-full w-3/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4   dark:border-gray-200  border-blue-950 border-2 rounded-lg">
        <h3 className="text-lg font-semibold dark:text-gray-200  mb-3">
         <FaCircleInfo className='inline'/>  Additional Information
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm dark:text-gray-400">
          <div>
            <strong className="dark:text-gray-200">Location:</strong> Barcelona, Spain
          </div>
          <div>
            <strong className="dark:text-gray-200">Work Authorization:</strong> EU Citizen & Spanish Seguridad Social
          </div>
          <div>
            <strong className="dark:text-gray-200">Availability:</strong> Immediate - Full-time 
          </div>
          <div>
            <strong className="dark:text-gray-200">Work Preference:</strong> On-site / Hybrid / Remote 
          </div>
        </div>
      </div>
    </div>
  );
};
