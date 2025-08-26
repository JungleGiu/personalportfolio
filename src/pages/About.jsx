import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";
import { useEffect, useState } from "react";
import { Education } from "../components/About/Education";
import { Background } from "../components/About/Background";
import { Skills } from "../components/About/Skills";

export const About = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory("background");
  }, []);
  return (
    <div>
      <NavBar />
      <div className="flex flex-row min-h-screen">
        <SideBar
          categories={["background", "education", "skills"]}
          setCategory={setCategory}
          cat="aboutMe"
        />
        <main className="flex-1 w-4/5 p-10 mb-10">
          <h1 className="text-2xl font-semibold capitalize text-blue-950 dark:text-gray-200">
            {category}
          </h1>
          <div className="mt-3">
            {category === "education" && <Education />}
            {category === "background" && <Background />}
            {category === "skills" && <Skills />}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
