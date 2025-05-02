import React from 'react';
import '../../assets/styles/experience.css';
import { FaPhp, FaKey, FaTachometerAlt, FaPython, FaGlobe } from 'react-icons/fa';
import { SiMariadb, SiDjango, SiSqlite, SiJavascript } from 'react-icons/si';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Backend Developer",
      company: "CR4matix",
      period: "2024 - 2025",
      description:
        "Designed and developed the backend system for ordering, inventory management, and sales reporting. Structured the database architecture and implemented server-side logic using PHP and MariaDB. Ensured data integrity, performance optimization, and seamless integration with the frontend team.",
      skills: [
        { name: "PHP", icon: <FaPhp /> },
        { name: "MariaDB", icon: <SiMariadb /> },
        { name: "Authentication", icon: <FaKey /> },
        { name: "Performance Optimization", icon: <FaTachometerAlt /> },
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: " DARUL MUBARAK FOUNDATION",
      period: "2025 - 2025",
      description:
        "Built the complete school management system including student enrollment, grading, attendance tracking, and multilingual support. Developed the backend using Django and SQLite3, and designed the frontend using HTML, CSS, and JavaScript. Integrated Google Translate API for real-time Arabic-to-English content translation.",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "SQLite3", icon: <SiSqlite /> },
        { name: "Google Translate API", icon: <FaGlobe /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ]
    },
    
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-header">
        <h2 className="experience-title">Experience</h2>
      </div>

      <div className="experience-container">
        {experiences.map((exp) => (
          <div className="experience-card" key={exp.id}>
            <div className="experience-content">
              <h3 className="experience-position">{exp.title}</h3>
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-period">{exp.period}</p>
              <p className="experience-description">{exp.description}</p>

              <div className="experience-skills">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
