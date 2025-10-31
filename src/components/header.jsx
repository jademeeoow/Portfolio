import { useState } from "react";
import "../assets/styles/header.css";
import logo from "../assets/images/logo/Rlogo.png";
import cvFile from "../assets/CV/Delena_Ronson.pdf"; // Update with your actual CV filename

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvFile;
    
    // Set the download attribute with the desired filename
    link.download = 'JD-Deleña-CV.pdf'; // You can customize the downloaded filename
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close mobile menu if open
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#home" className="logo" onClick={handleNavClick}>
          <div className="logo-container">
            <img src={logo} alt="JD Logo" className="right-half" />
          </div>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={handleNavClick}>
            Home
          </a>
          <a href="#about" onClick={handleNavClick}>
            About
          </a>
          <a href="#projects" onClick={handleNavClick}>
            Projects
          </a>
          <a href="#experience" onClick={handleNavClick}>
            Experience
          </a>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>

          <div className="nav-spacer"></div>

          <button className="download-btn" onClick={handleDownloadCV}>
            Download CV
          </button>
        </nav>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="hamburger"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;