import "../assets/styles/projects.css";
import { FaTimes, FaExpand, FaCompress } from 'react-icons/fa';
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaPython,
  FaPhp,
  FaJs,
  
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaGoogle,
  FaDatabase,
  FaMobile
} from "react-icons/fa";
import { 
  SiDjango, 
  SiSqlite, 
  SiMariadb, 
  SiMongodb,
  SiNodedotjs,
  SiStripe
} from "react-icons/si";
import { useState } from 'react';


import barangayImage from "../assets/images/projects/bis.png";
import lineshubImage from "../assets/images/projects/lineshub.png";
import wikangaraboImage from "../assets/images/projects/arabo.png";
import merakiImage from "../assets/images/projects/meraki1.png";
import pokedexImage from "../assets/images/projects/pokemon.png";
import ecommerceImage from "../assets/images/projects/todo.png";


import ProjectModal from "../components/project-modal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
const [currentProjectIndex, setCurrentProjectIndex] = useState(0);



const nextProject = () => {
  if (currentProjectIndex < projects.length - 1) {
    const nextIndex = currentProjectIndex + 1;
    setSelectedProject(projects[nextIndex]);
    setCurrentProjectIndex(nextIndex);
  }
};

const prevProject = () => {
  if (currentProjectIndex > 0) {
    const prevIndex = currentProjectIndex - 1;
    setSelectedProject(projects[prevIndex]);
    setCurrentProjectIndex(prevIndex);
  }
};


  const techIcons = {
    'Python': <FaPython className="tech-icon" />,
    'Django': <SiDjango className="tech-icon" />,
    'SQLite3': <SiSqlite className="tech-icon" />,
    'PHP': <FaPhp className="tech-icon" />,
    'MariaDB': <SiMariadb className="tech-icon" />,
    'HTML': <FaHtml5 className="tech-icon" />,
    'CSS': <FaCss3Alt className="tech-icon" />,
    'JavaScript': <FaJs className="tech-icon" />,
    'Google API': <FaGoogle className="tech-icon" />,
    'React': <FaReact className="tech-icon" />,
    'Local Storage': <FaDatabase className="tech-icon" />,
    'Pokémon API': <FaMobile className="tech-icon" />,
    'Axios': <FaJs className="tech-icon" />,
    'Node.js': <SiNodedotjs className="tech-icon" />,
    'MongoDB': <SiMongodb className="tech-icon" />,
    'Stripe': <SiStripe className="tech-icon" />,
    'JWT': <FaJs className="tech-icon" />
  };

  const projects = [
    {
      id: 1,
      title: "Barangay Information System",
      description: "Management system for barangay operations including records, document requests, and admin functions.",
      image: barangayImage,
      technologies: ["Python", "Django", "SQLite3", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/alysssi/BARANGAY_DJANGO",
      liveUrl: "https://delanajd.pythonanywhere.com/",
    },
    {
      id: 2,
      title: "Lines Hub",
      description: "Service information hub with user management, content organization, and responsive design.",
      image: lineshubImage,
      technologies: ["PHP", "MariaDB", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/jademeeoow/lineshub",
      liveUrl: "https://bis.free.nf/templates/html/index.php?i=1",
    },
    {
      id: 3,
      title: "Meraki Product Design Showcase",
      description: "A showcase of the product we made digitally for our little school company.",
      image: merakiImage,
      technologies: [ "HTML", "CSS"],
      githubUrl: "https://github.com/alysssi/Meraki",
      liveUrl: "https://alysssi.github.io/Meraki/index.html",
    },
    {
      id: 4,
      title: "Just Do It",
      description: "A react powered To do list app.",
      image: ecommerceImage,
      technologies: ["React", "CSS", "Javascript", "Local Storage"],
      githubUrl: "https://github.com/alymeeoow/TO-DO",
      liveUrl: "https://jnjtodo.netlify.app/",
    },
    {
      id: 5,
      title: "Pokédex React App",
      description: "Pokémon encyclopedia with search, filters, and API integration.",
      image: pokedexImage,
      technologies: ["React", "Pokémon API", "CSS", "JavaScript"],
      githubUrl: "https://github.com/alymeeoow/pokemon-game",
      liveUrl: "https://jnjpokemon.netlify.app/",
    },
    {
      id: 6,
      title: "Wikang Arabo",
      description: "Arabic language learning platform using Google Translate API with exercises and cultural content.",
      image: wikangaraboImage,
      technologies: ["Python", "Django", "SQLite3", "Google API", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/yourusername/wikang-arabo",
      liveUrl: "https://your-wikangarabo-demo.com",
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-wrapper">
        <div className="projects-header">
          <h2>My <span>Projects</span></h2>
          <p>Here are some of my recent works showcasing the little by little progress of my skills</p>
        </div>

        <div className="projects-timeline">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-item ${index % 2 === 0 ? 'odd' : 'even'} visible`}>
              <div className="project-content-side">
                <div className="project-number">0{index + 1}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {techIcons[tech]}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    className="project-link secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="project-link primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>

              <div className="project-image-side">
                <div 
                  className="project-image-container"
                  onClick={() => openModal(project)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-more">
          <a 
            href="https://github.com/yourusername" 
            className="view-more-btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
            View More on GitHub
          </a>
        </div>
      </div>

      {/* Project Modal */}
    

<ProjectModal
  isOpen={isModalOpen}
  onClose={closeModal}
  project={selectedProject}
  projects={projects}
  currentIndex={currentProjectIndex}
  onNext={nextProject}
  onPrev={prevProject}
/>

    </section>
  );
};

export default Projects;