// MessageModal.jsx
import React, { useEffect, useRef, useState } from "react";
import "../../assets/styles/message_modal.css";
import { sendWithEmailJS } from "./emailService";

const MessageModal = ({ isOpen, onClose, onSuccess }) => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const textareaRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (textareaRef.current) textareaRef.current.focus();
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSend = async () => {
    if (!message.trim() || !email.trim()) return;

    setIsSending(true);
    const result = await sendWithEmailJS(email, message);
    setIsSending(false);

    if (result.success) {
      onSuccess(); // Notify parent component of success
      setMessage("");
      setEmail("");
    } else {
      alert(result.message);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="message-modal-overlay">
      <div className="message-modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Send Me a Message</h2>

        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input enhanced-input"
          required
        />

        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />

        <div className="send-btn-container">
          <button
            className="send-btn"
            onClick={handleSend}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Email"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;