import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>

      {/* Particles with real fixed Z index */}
      <ParticlesBackground />

      <div className="relative z-20 text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </div>

    </ThemeProvider>
  );
}

export default App;
