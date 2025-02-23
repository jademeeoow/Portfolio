import React, { useState, useEffect } from 'react';
import '../assets/styles/hero.css';

import profileFront from '../assets/images/jdpixel-front.jpeg';
import profileBack from '../assets/images/jdpixel-back.jpg';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import linked from '../assets/images/linked.svg';

const greetings = [
  "Good Day, Friend!",     
  "Maayong Adlaw, Amigo!",    
  "Bwenas Diyas, Amigo!",     
  "Bonjour, Mon Ami!",     
  "Magandang Araw, Kaibigan!", 
  "こんにちは、友達！",    
  "안녕하세요, 친구!",    
];

const Hero = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 

      setTimeout(() => {
        setCurrentGreeting((prev) => (prev + 1) % greetings.length);
        setFade(true); 
      }, 500); 

    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className='container'>
   
      <div className="greeting-wrapper">
        <h1 className={`greetings ${fade ? 'fade-in' : 'fade-out'}`}>
          {greetings[currentGreeting]}
        </h1>
      </div>


      <div className='profileContainer' onClick={handleImageClick}>
        <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
          <img className='image front' src={profileFront} alt="Profile Front" />
          <img className='image back' src={profileBack} alt="Profile Back" />
        </div>
      </div>


      <h2 className='name'>Ronson Aguidan Deleña Jr</h2>
      <p className='role'>Back-End Developer</p>

  
      <div className='socialIcons'>
        <a href="https://www.facebook.com/Jd.Delena21/" target="_blank" rel="noopener noreferrer" className='icon'>
          <img className='social' src={facebook} alt="Facebook" />
          <p className='POP'>Facebook</p>
        </a>
        <a href="https://www.instagram.com/alymeeoow/" target="_blank" rel="noopener noreferrer" className='icon'>
          <img className='social' src={instagram} alt="Instagram" />
          <p className='POP'>Instagram</p>
        </a>
        <a href="https://www.linkedin.com/in/jd-dele%C3%B1a-391220256/" target="_blank" rel="noopener noreferrer" className='icon'>
          <img className='social' src={linked} alt="LinkedIn" />
          <p className='POP'>LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
