import React from "react";
import "../../assets/styles/modal.css"; 

const GameModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={imageSrc} alt="Game Rank" className="modal-image" />
      </div>
    </div>
  );
};

export default GameModal;
