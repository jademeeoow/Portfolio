import "../assets/styles/experience.css";
import React, { useEffect, useRef } from 'react';
import { 
  FaServer, 
  FaCode,
  FaPython,
  FaPhp,
  FaJs,
  FaHtml5,
  FaDatabase,
  FaCogs,
  FaChartLine,
  FaRocket,
  FaTools,
  FaCrosshairs
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiMariadb, 
  SiSqlite,
  SiGooglecloud
} from 'react-icons/si';

// Tech icons mapping
const techIcons = {
  'PHP': <FaPhp className="tech-icon" />,
  'MariaDB': <SiMariadb className="tech-icon" />,
  'Authentication': <FaCogs className="tech-icon" />,
  'Performance Optimization': <FaChartLine className="tech-icon" />,
  'Python': <FaPython className="tech-icon" />,
  'Django': <SiDjango className="tech-icon" />,
  'SQLite3': <SiSqlite className="tech-icon" />,
  'Google Translate API': <SiGooglecloud className="tech-icon" />,
  'JavaScript': <FaJs className="tech-icon" />,
  'HTML': <FaHtml5 className="tech-icon" />
};

const Experience = () => {
  const experienceRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Backend Developer",
      company: "CR4matix",
      period: "2024 - 2025",
      description: "Designed and developed the backend system for ordering, inventory management, and sales reporting. Structured the database architecture and implemented server-side logic using PHP and MariaDB. Ensured data integrity, performance optimization, and seamless integration with the frontend team.",
      technologies: ["PHP", "MariaDB", "Authentication", "Performance Optimization"],
      focusAreas: ["Backend Architecture", "Database Design", "System Optimization", "API Integration"],
      icon: <FaServer />,
      type: "backend",
      accentColor: "#e5203a"
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "DARUL MUBARAK FOUNDATION",
      period: "2025 - 2025",
      description: "Built the complete school management system including student enrollment, grading, attendance tracking, and multilingual support. Developed the backend using Django and SQLite3, and designed the frontend using HTML, CSS, and JavaScript. Integrated Google Translate API for real-time Arabic-to-English content translation.",
      technologies: ["Python", "Django", "SQLite3", "Google Translate API", "JavaScript", "HTML"],
      focusAreas: ["Full Stack Development", "System Integration", "Multilingual Support", "UI/UX Design"],
      icon: <FaCode />,
      type: "fullstack",
      accentColor: "#667eea"
    }
  ];

  return (
    <section className="experience-modern" id="experience">
      <div className="experience-container">
        <div className="experience-header-modern">
          <div className="header-content">
            <div className="title-wrapper">
              <span className="pre-title">Career Path</span>
              <h2>My <span className="accent-text">Experience</span></h2>
            </div>
            <p className="header-description">
              A timeline of my growth and accomplishments in backend and full-stack development
            </p>
          </div>
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
          </div>
        </div>

        <div className="experience-timeline" ref={experienceRef}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              ref={el => itemsRef.current[index] = el}
              style={{ '--accent-color': exp.accentColor }}
            >
              <div className="timeline-marker">
                <div className="marker-icon">
                  {exp.icon}
                </div>
                <div className="timeline-line"></div>
              </div>

              <div className="experience-content-wrapper">
                <div className="experience-header">
                  <div className="role-type-badge">
                    {exp.type === 'backend' ? 'Backend' : 'Full Stack'}
                  </div>
                  <h3 className="role-title">{exp.role}</h3>
                  <div className="company-period">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>

                <div className="experience-content">
                  <div className="description-section">
                    <p>{exp.description}</p>
                  </div>

                  <div className="tech-stack-section">
                    <div className="section-header">
                      <FaTools className="section-icon" />
                      <h4>Tech Stack</h4>
                    </div>
                    <div className="tech-grid">
                      {exp.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="tech-item">
                          <div className="tech-icon-wrapper">
                            {techIcons[tech] || <FaCode className="tech-icon" />}
                          </div>
                          <span className="tech-name">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="focus-areas-section">
                    <div className="section-header">
                      <FaCrosshairs className="section-icon" />
                      <h4>Key Focus Areas</h4>
                    </div>
                    <div className="focus-tags">
                      {exp.focusAreas.map((area, areaIndex) => (
                        <span key={areaIndex} className="focus-tag">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="timeline-end">
            <div className="end-marker">
              <FaRocket className="rocket-icon" />
            </div>
            <div className="end-text">More to come...</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;