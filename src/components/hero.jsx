import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import "../assets/styles/hero.css";
import profile from "../assets/images/me/jdpixel.jpeg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>Hi, there!</h3>
        <h1>
          <span>JD</span> IS HERE TO BE YOUR BACK-END DEVELOPER
        </h1>
        <p className="motto">"If you can define it, I can make it!"</p>
        <p className="tagline">
          Turning complex problems into elegant technical solutions.
        </p>
      </div>

      <div className="hero-image">
        <img 
          src={profile} 
          alt="JD - Back-End Developer" 
          loading="lazy"
        />

        <div className="social-icons">
          <a 
            href="https://www.facebook.com/Jd.Delena21/"
            className="icon facebook"
            aria-label="Visit Facebook profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a 
            href="https://www.instagram.com/alymeeoow/"
            className="icon instagram"
            aria-label="Visit Instagram profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a 
            href="https://github.com/alymeeoow"
            className="icon github"
            aria-label="Visit GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
