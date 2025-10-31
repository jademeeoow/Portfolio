import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about-us";
import Projects from "./components/projects";

import Experience from "./components/experience";
import Contact from "./components/contact";


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
