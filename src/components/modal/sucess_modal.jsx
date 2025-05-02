// SuccessModal.jsx
import React from "react";
import "../../assets/styles/sucess_modal.css";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="message-modal-overlay">
      <div className="message-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Success!</h2>
        <p>Your message was sent successfully.</p>
        <div className="close-btn-container">
          <button className="close-btn-1" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;