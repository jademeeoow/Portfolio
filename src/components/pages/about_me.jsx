// AboutMe.jsx
import React, { useState } from "react";
import "../../assets/styles/about_me.css";
import Dota from "../../assets/images/games/dota.png";
import DOTA2 from "../../assets/images/games/dota2.png";
import Legends from "../../assets/images/games/mobile_legends.jpg";
import MLBB from "../../assets/images/games/mlbb.png";
import Coc from "../../assets/images/games/coc.jpg";
import Clash from "../../assets/images/games/clash.png";

import MessageModal from "../modal/message_modal";
import SuccessModal from "../modal/sucess_modal";
import Modal from "../modal/modal";

const AboutMe = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = (image) => {
    setActiveImage(image);
    setModalOpen(true);
  };

  const handleSuccess = () => {
    setShowSuccess(true);
    setIsMessageOpen(false);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <section className="about-me" id="aboutme">
      <div className="about-header">
        <h2 className="about-section-title">About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-card">
          <div className="card-icon"></div>
          <div className="card-text">
            <h3 className="about-subtitle">In Coding</h3>
            <p>
              Hi, I'm a <strong>Back-end developer</strong> with a passion for
              building scalable, reliable, and high-performing systems. My
              expertise lies in <strong>PHP, Django, React, SQL, and Cloud services</strong>,
              allowing me to create efficient and maintainable architectures.
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="card-icon"></div>
          <div className="card-text">
            <h3 className="about-subtitle">Problems I love</h3>
            <p>
              I love <strong>solving technical problems</strong> and optimizing
              workflows, ensuring that applications run smoothly. Whether it's
              debugging or enhancing system efficiency, I'm always up for a
              challenge.
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="card-icon"></div>
          <div className="card-text">
            <h3 className="about-subtitle">Beyond Coding</h3>
            <div className="hobby-tags">
              <span className="hobby-tag" onClick={() => openModal(DOTA2)}>
                <img src={Dota} alt="Dota 2" className="game-icon" />
                Dota 2
              </span>
              <span className="hobby-tag" onClick={() => openModal(MLBB)}>
                <img src={Legends} alt="Mobile Legends" className="game-icon" />
                MLBB
              </span>
              <span className="hobby-tag" onClick={() => openModal(Clash)}>
                <img src={Coc} alt="Clash of Clans" className="game-icon" />
                Clash of Clans
              </span>
            </div>

            <p className="hobby-text">
              When I'm not coding, I'm gaming! I apply the same strategic
              thinking and teamwork from development to my gameplay.
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="card-icon"></div>
          <div className="card-text">
            <h3 className="about-subtitle">Let's Connect!</h3>
            <p>
              I'm always open to collaborating on exciting projects. Feel free{" "}
              to{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMessageOpen(true);
                }}
                className="contact-link"
              >
                <span className="link-underline">EMAIL ME</span>
              </a>{" "}
              — let's build something great together!
            </p>
          </div>
        </div>
      </div>

      <MessageModal
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
        onSuccess={handleSuccess}
      />

      <SuccessModal isOpen={showSuccess} onClose={handleCloseSuccess} />

      <Modal isOpen={modalOpen} imageSrc={activeImage} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default AboutMe;