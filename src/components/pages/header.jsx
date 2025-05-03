import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/header.css';
import logo from '../../assets/images/me/Rlogo.png';
import { smoothScroll } from '../../assets/js/smoothscroll';
import cvJD from "../../assets/CV/Delena_Ronson.pdf"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flaming, setFlaming] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setFlaming(true);
    setTimeout(() => {
      setFlaming(false);
    }, 1500);
  };

  const handleDownload = () => {
    const cvPath = cvJD; 
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Delena_Ronson.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className={flaming ? 'flaming-logo' : ''} />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
      </div>
      <nav className={menuOpen ? 'nav active' : 'nav'}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT ME</Link></li>
          <li><Link to="/whatido" onClick={() => setMenuOpen(false)}>WHAT I DO</Link></li>
    
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link></li>
          <li><Link to="/experience" onClick={() => setMenuOpen(false)}>EXPERIENCE</Link></li>
          <li><Link to="/certificates" onClick={() => setMenuOpen(false)}>CERTIFICATES</Link></li>
          <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>BLOGS</Link></li>
          <li>
            <button className="nav-btn download-btn crimson" onClick={handleDownload}>
              DOWNLOAD CV
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
