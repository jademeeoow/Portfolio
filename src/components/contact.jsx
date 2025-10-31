import "../assets/styles/contact.css";
import React, { useState, useRef, useEffect } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const contactRef = useRef(null);
  const itemsRef = useRef([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');


    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are not properly configured');
      setSubmitStatus('error');
      setErrorMessage('Email service configuration error. Please contact me directly.');
      setIsSubmitting(false);
      return;
    }

    try {
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'JD Deleña',
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        emailParams,
        publicKey
      );

      console.log("Email sent successfully:", response);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus('error');
      setErrorMessage(
        error.text || 
        'Failed to send message. Please try again or contact me directly via email.'
      );
    } finally {
      setIsSubmitting(false);
      
   
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "qb20210094@wmsu.edu.ph",
      link: "mailto:qb20210094@wmsu.edu.ph"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+639158423931",
      link: "tel:+639158423931"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Zamboanga City, Philippines",
      link: "#"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "JD Deleña",
      link: "https://www.linkedin.com/in/jd-dele%C3%B1a-391220256/"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "alymeeoow",
      link: "https://github.com/alymeeoow"
    }
  ];

  return (
    <section className="contact-modern" id="contact" ref={contactRef}>
      <div className="contact-container">
        <div className="contact-header-modern">
          <div className="header-content">
            <div className="title-wrapper">
              <span className="pre-title">Get In Touch</span>
              <h2 className="contact-title"><span>Let's</span> Connect</h2>
            </div>
            <p className="header-description">
              Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
            </p>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-grid">
       
            <div 
              className="contact-info-card"
              ref={el => itemsRef.current[0] = el}
            >
              <div className="card-content">
                <div className="info-header">
                  <h3>Contact Information</h3>
                  <p>Feel free to reach out through any of these channels</p>
                </div>
                
                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="contact-info-item"
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className="info-icon">
                        {info.icon}
                      </div>
                      <div className="info-content">
                        <span className="info-title">{info.title}</span>
                        <span className="info-value">{info.value}</span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="availability-badge">
                  <div className="status-dot"></div>
                  <span>Available for new projects</span>
                </div>
              </div>
            </div>

        
            <div 
              className="contact-form-card"
              ref={el => itemsRef.current[1] = el}
            >
              <div className="card-content">
                <div className="form-header">
                  <h3>Send Me a Message</h3>
                  <p>I'll get back to you as soon as possible</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name  <span>*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address  <span>*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject <span>*</span> </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message <span>*</span> </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows="5"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="btn-icon" />
                          Send Message
                        </>
                      )}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="success-message">
                        <FaCheck className="success-icon" />
                        <span>Message sent successfully! I'll get back to you soon.</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="error-message">
                        <FaExclamationTriangle className="error-icon" />
                        <span>{errorMessage}</span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;