import React from 'react';
import { FaTimes, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import '../../assets/styles/blog_modal.css';

const BlogModal = ({ isOpen, blog, onClose }) => {
  if (!isOpen || !blog) return null;

  return (
    <div className="blog-modal-overlay" onClick={onClose}>
   <div
  className={`blog-modal-content ${blog.title === "Baguio Night Market" ? "baguio-market" : ""}`}
  onClick={(e) => e.stopPropagation()}
>
  <button className="blog-modal-close" onClick={onClose}>
    <FaTimes />
  </button>
        <div className="blog-modal-image-container">
        <img
  src={blog.image}
  alt={blog.title}
  className={`blog-modal-image ${
    blog.title === "Baguio Night Market" ? "baguio-market-image" : ""
  }`}
/>

        </div>
        <div className="blog-modal-text">
          <h3 className="blog-modal-title">{blog.title}</h3>
          <div className="blog-modal-meta">
            <span className="blog-modal-date">
              <FaCalendarAlt /> {blog.date}
            </span>
          </div>
          <p className="blog-modal-description">{blog.description}</p>
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-modal-link"
          >
         
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;