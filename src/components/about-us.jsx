import "../assets/styles/about.css";
import catImage from "../assets/images/me/meowy.jpg"; 

import { 
  FaPhp, 
  FaReact, 
  FaGit, 
  FaPaw, 
  FaNodeJs,
  FaCogs
} from "react-icons/fa";

import { 
  DiDjango, 
  DiMysql, 
  DiPython 
} from "react-icons/di";

import { 
  SiMariadb, 
  SiSqlite, 
  SiFirebase,
  SiZapier,
  SiN8N
} from "react-icons/si";


const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-wrapper">

          {/* TEXT */}
          <div className="about-text">
            <h2>
              <span>About</span> Me
            </h2>

            <p className="about-highlight">
              I don't just write code — <strong>I solve problems.</strong>
            </p>

            <p>
              I'm JD, a Full Stack & Automation Engineer focused on building scalable,
              efficient, and high-performing systems using modern web technologies.
            </p>

            <p>
              I specialize in developing full stack applications with React and Firebase,
              and creating automation workflows using tools like n8n, Zapier, and Power Automate
              to optimize business processes.
            </p>

            <p>
              Outside of development, I'm a gamer — Dota 2, Mobile Legends, and
              Clash of Clans. Strategy, teamwork and smart decisions are part of
              everything I do.
            </p>

            {/* STATS */}
            <div className="about-stats">
              <div className="stat-card">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>

              <div className="stat-card">
                <h3>2+ Year</h3>
                <p>Development Experience</p>
              </div>

              <div className="stat-card">
                <h3>100%</h3>
                <p>Passion & Dedication</p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img 
                src={catImage} 
                alt="Cute cat as coding companion"
                className="about-image" 
              />
              
              <div className="cat-overlay">
                <h4><FaPaw /> This is me when debugging</h4>
                <p>Just look in my eyes</p>
              </div>
            </div>

            {/* SKILLS */}
            <div className="about-skills">
              <span className="skill-badge"><FaPhp /> PHP</span>
              <span className="skill-badge"><DiDjango /> Django</span>
              <span className="skill-badge"><FaReact /> React</span>
              <span className="skill-badge"><FaNodeJs /> Node.js</span>
              <span className="skill-badge"><SiFirebase /> Firebase</span>
              <span className="skill-badge"><DiMysql /> MySQL</span>
              <span className="skill-badge"><SiMariadb /> MariaDB</span>
              <span className="skill-badge"><SiSqlite /> SQLite</span>
              <span className="skill-badge"><DiPython /> Python</span>
              <span className="skill-badge"><FaGit /> Git</span>

              {/* AUTOMATION */}
              <span className="skill-badge"><SiN8N /> n8n</span>
              <span className="skill-badge"><SiZapier /> Zapier</span>
           
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;