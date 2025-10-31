import React, { useEffect } from 'react';
import { 
  FaTimes, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaChevronLeft, 
  FaChevronRight,
  FaPython,
  FaPhp,
  FaJs,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaGoogle,
  FaDatabase,
  FaMobile
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiSqlite, 
  SiMariadb, 
  SiMongodb,
  SiNodedotjs,
  SiStripe
} from 'react-icons/si';
import '../assets/styles/project-modal.css';


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

const ProjectModal = ({ isOpen, onClose, project, projects, currentIndex, onNext, onPrev }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const hasNext = currentIndex < projects.length - 1;
  const hasPrev = currentIndex > 0;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
      
        <a className="project-modal-close" onClick={onClose}>
          <FaTimes />
        </a>
        
    
        <a className="mobile-close-btn" onClick={onClose}>
          <FaTimes />
        </a>
    
        <div className="project-modal-image-side">
          <img 
            src={project.image} 
            alt={project.title}
            className="project-modal-image"
          />
        </div>
        
     
        <div className="project-modal-info-side">
          <div className="project-modal-title">
            <h2>{project.title}</h2>
          </div>
          
          <div className="project-modal-description">
            <p>{project.description}</p>
          </div>
          
          <div className="project-modal-tech">
            <div className="tech-section-title">
             Tech and Tools
            </div>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {techIcons[tech] || <FaJs className="tech-icon" />}
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
         
          <div className="project-modal-links">
            <a
              href={project.githubUrl}
              className="project-link secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              View Code
            </a>
            <a
              href={project.liveUrl}
              className="project-link primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          </div>
          
   
          <div className="modal-nav-container">
            <button 
              className="modal-nav" 
              onClick={onPrev}
              disabled={!hasPrev}
            >
              <FaChevronLeft />
              Previous
            </button>
            <button 
              className="modal-nav" 
              onClick={onNext}
              disabled={!hasNext}
            >
              Next
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;