import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';
import logo from '../assets/images/Rlogo.png';
import { smoothScroll } from '../assets/js/smoothscroll';

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
          <li><a href="#whatido" onClick={(e) => smoothScroll(e, 'whatido', setMenuOpen)}>WHAT I DO</a></li>
          <li><a href="#projects" onClick={(e) => smoothScroll(e, 'projects', setMenuOpen)}>PROJECTS</a></li>
          <li><a href="#skills" onClick={(e) => smoothScroll(e, 'skills', setMenuOpen)}>SKILLS</a></li>
          <li><a href="#blogs" onClick={(e) => smoothScroll(e, 'blogs', setMenuOpen)}>BLOGS</a></li>
          <li><a href="#contact" onClick={(e) => smoothScroll(e, 'contact', setMenuOpen)}>CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
