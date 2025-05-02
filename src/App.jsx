import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from "./components/pages/header";

import Hero from "./components/pages/hero";
import About from "./components/pages/about_me"
import Ido from "./components/pages/whatido"
import Projects from "./components/pages/projects"
import Experience from "./components/pages/experience"
import Certificates from "./components/pages/certificates"
import Blogs from "./components/pages/blogs"



function App() {
  return (
    <Router>
      
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About />} />
        <Route path="/whatido" element={<Ido />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </Router>
  );
}

export default App;
