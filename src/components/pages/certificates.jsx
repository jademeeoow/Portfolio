import React, { useState } from 'react';
import '../../assets/styles/certificates.css';
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import GameModal from '../modal/modal';

// Import all certificate images
import cert1 from '../../assets/images/cert/1.png';
import cert2 from '../../assets/images/cert/2.png';
import cert3 from '../../assets/images/cert/3.png';
import cert4 from '../../assets/images/cert/4.png';
import cert5 from '../../assets/images/cert/5.png';
import cert6 from '../../assets/images/cert/6.png';
import cert7 from '../../assets/images/cert/7.png';
import cert8 from '../../assets/images/cert/8.png';
import cert9 from '../../assets/images/cert/9.png';
import cert10 from '../../assets/images/cert/10.png';
import cert11 from '../../assets/images/cert/11.png';
import cert12 from '../../assets/images/cert/12.png';
import cert13 from '../../assets/images/cert/13.png';

import cert14 from '../../assets/images/cert/14.png';
const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates = [
    { id: 1, title: 'Python Interview Ready', image: cert1 },
    { id: 2, title: 'Intro to Cloud Computing', image: cert2 },
    { id: 3, title: 'Intro to Front-End Development', image: cert3 },
    { id: 4, title: 'Python for Beginners', image: cert4 },
    { id: 5, title: 'Intro to PHP', image: cert5 },
    { id: 6, title: 'DeepSeek for Beginners', image: cert6 },
    { id: 7, title: 'Javascript for Beginners', image: cert7 },
    { id: 8, title: 'Generative AI for Beginners', image: cert8 },
    { id: 9, title: 'ReactJS for Beginners', image: cert9 },
    { id: 10, title: 'Web Development for Beginners', image: cert10 },
    { id: 11, title: 'Getting Started with Full Stack Java Development', image: cert11 },

    { id: 13, title: 'Responsive Web Design', image: cert13 },
    { id: 14, title: 'Java Algorithm and Data Structures', image: cert14 },
  ];

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-header">
        <h2 className="certificates-title">Certificates</h2>
      </div>

      <div className="certificates-container">
        <button className="nav-arrow left-arrow" onClick={prevCertificate}>
          <FaChevronLeft />
        </button>

        <div className="certificate-card">
          <div className="certificate-image-container">
            <img 
              src={certificates[currentIndex].image} 
              alt={certificates[currentIndex].title}
              className="certificate-image"
            />
            <button className="expand-button" onClick={openModal}>
              <FaExpand />
            </button>
          </div>
          <h3 className="certificate-title">{certificates[currentIndex].title}</h3>
        </div>

        <button className="nav-arrow right-arrow" onClick={nextCertificate}>
          <FaChevronRight />
        </button>
      </div>

      <div className="certificate-indicators">
        {certificates.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <GameModal 
        isOpen={isModalOpen}
        imageSrc={certificates[currentIndex].image}
        onClose={closeModal}
      />
    </section>
  );
};

export default Certificates;