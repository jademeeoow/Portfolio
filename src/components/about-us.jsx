import "../assets/styles/about.css";
import catImage from "../assets/images/me/meowy.jpg"; 


import { FaPhp, FaReact, FaGit, FaPaw } from "react-icons/fa";
import { DiDjango, DiMysql, DiPython } from "react-icons/di";
import { SiMariadb, SiSqlite } from "react-icons/si";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-wrapper">

         
          <div className="about-text">
            <h2>
              <span>About</span> Me
            </h2>

            <p className="about-highlight">
              I don't just write code — <strong>I solve problems.</strong>
            </p>

            <p>
              I'm JD, a Back-End developer focused on building scalable, secure
              and high-performing systems using PHP, Django, React and SQL databases.
            </p>

            <p>
              I specialize in debugging, performance optimization and creating clean,
              maintainable architectures for real-world applications.
            </p>

            <p>
              Outside of development, I'm a gamer — Dota 2, Mobile Legends, and
              Clash of Clans. Strategy, teamwork and smart decisions are part of
              everything I do.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>

              <div className="stat-card">
                <h3>2+ Years</h3>
                <p>Development Experience</p>
              </div>

              <div className="stat-card">
                <h3>100%</h3>
                <p>Passion & Dedication</p>
              </div>
            </div>
          </div>

      
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img 
                src={catImage} 
                alt="Cute cat as coding companion"
                className="about-image" 
              />
              
              <div className="cat-overlay">
                <h4><FaPaw /> This is me when debbuging</h4>
                <p>Just look in my eyes</p>
              </div>
            </div>

            <div className="about-skills">
              <span className="skill-badge"><FaPhp /> PHP</span>
              <span className="skill-badge"><DiDjango /> Django</span>
              <span className="skill-badge"><FaReact /> React</span>
              <span className="skill-badge"><DiMysql /> MySQL</span>
              <span className="skill-badge"><SiMariadb /> MariaDB</span>
              <span className="skill-badge"><SiSqlite /> SQLite</span>
              <span className="skill-badge"><DiPython /> Python</span>
              <span className="skill-badge"><FaGit /> Git</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;