import {  BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/Theme";
import { useState } from "react";
import Loading from "./components/Loading";
import "./index.css";
// import Projects from './pages/Projects'
// import Skills from './pages/Skills'
// import Experience from './pages/Experience'
// import About from './pages/About'
// import Contact from './pages/Contact'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="App">
      {!isLoaded ? (
        <Loading onComplete={() => setIsLoaded(true)} />
      ) : (
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
