import { Footer } from "../components/Footer.jsx";
import { NavBar } from "../components/NavBar.jsx";
import { PersonalIntro } from "../components/Home/PersonalIntro.jsx";
import { Technologies } from "../components/Home/Technologies.jsx";
import { ReavealOnScroll } from "../components/ReavealOnScroll.jsx";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <PersonalIntro />
      <Technologies />
      <Footer />
    </div>
  );
};
