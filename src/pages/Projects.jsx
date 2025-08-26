import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { getMyProjects } from "../api/GitHubOAuth";
import { useState, useEffect } from "react";
import { ProjectCard } from "../components/ProjectCard";
export const Projects = () => {
const [projects, setProjects] = useState([]); 
 const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory("All");
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getMyProjects();
      setProjects(projects);
      console.log(projects);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <NavBar/>
      <div className="flex flex-row min-h-screen">
    <SideBar cat="projects" categories={["All", "React", "Vanilla", "Node+Express"]} setCategory={setCategory}/>
    <main className="flex-1 w-4/5 p-10 mb-10">
          <h1 className="text-2xl font-semibold capitalize text-blue-950 dark:text-gray-200">
            {category}
          </h1>
      <div className="mt-3">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id}/>
        ))}
        </div>
        </main>
      </div>
    <Footer/>
    </div>
  )
}
