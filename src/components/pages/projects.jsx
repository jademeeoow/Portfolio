import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../../assets/styles/projects.css';

import barangayInfo from '../../assets/images/projects/bis.png';
import bidwave from '../../assets/images/projects/bidwave.png';
import rnr from '../../assets/images/projects/rnr.png';
import lineshub from '../../assets/images/projects/lineshub.png';
import wikangArabo from '../../assets/images/projects/arabo.png';
import meraki from '../../assets/images/projects/meraki1.png';
import todo from '../../assets/images/projects/todo.png';
import pokemon from '../../assets/images/projects/pokemon.png';

import GameModal from '../modal/modal';

const projects = [
  {
    title: "Barangay Information System",
    image: barangayInfo,
    link: "https://delanajd.pythonanywhere.com/",
    github: "https://github.com/alysssi/BARANGAY_DJANGO.git"
  },
 
  {
    title: "Rnr",
    image: rnr,
    link: "http://rnr.free.nf/",
    github: "https://github.com/alysssi/rnr.git"
  },
  {
    title: "Lineshub",
    image: lineshub,
    link: "https://bis.free.nf/templates/html/index.php",
    github: "https://github.com/jademeeoow/lineshub.git"
  },
  { 
    title: "Wikang Arabo",
    image: wikangArabo,
    link: "https://tagarab.pythonanywhere.com/",
    github: "https://github.com/yourrepo/wikang-arabo"
  },
  {
    title: "Meraki",
    image: meraki,
    link: "https://alysssi.github.io/Meraki/index.html",
    github: "https://github.com/alysssi/Meraki.git"
  },
  {
    title: "Todo",
    image: todo,
    link: "https://jnjtodo.netlify.app/",
    github: "https://github.com/alymeeoow/TO-DO.git"
  },
  {
    title: "Pokemon-Pokedex",
    image: pokemon,
    link: "https://jnjpokemon.netlify.app/",
    github: "https://github.com/alymeeoow/pokemon-game.git"
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon github-icon"
                  title="View on GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon preview-icon"
                  title="View Live"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <h3
  className="project-title"
  onClick={() => setSelectedImage(project.image)}
  style={{ cursor: 'pointer' }}
>
  {project.title}
</h3>

          </div>
        ))}
      </div>

      <GameModal
        isOpen={!!selectedImage}
        imageSrc={selectedImage}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
