import React, { useState } from 'react';
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import '../../assets/styles/blogs.css';
import BlogModal from '../modal/blog_modal';

// Import blog images
import blog1 from '../../assets/images/blogs/day1.png';
import blog2 from '../../assets/images/blogs/day2.jfif';
import blog3 from '../../assets/images/blogs/day3.jfif';
import blog4 from '../../assets/images/blogs/day4.jfif';
import blog5 from '../../assets/images/blogs/day5.jfif';
import blog6 from '../../assets/images/blogs/day6.png';
import blog7 from '../../assets/images/blogs/day7.png';

const blogs = [
  {
    title: " Exploring Rizal Park",
    image: blog1,
    link: "#",
    date: "April 7, 2025",
    description: "A full day exploring the historic Rizal Park in Manila, visiting key monuments and learning about Philippine history."
  },
  {
    title: " SBMA Seaport Adventure",
    image: blog2,
    link: "#",
    date: "April 8, 2025",
    description: "Exploring the Subic Bay Metropolitan Authority seaport area, with its mix of commercial and recreational spaces."
  },
  {
    title: " National Museum of Natural History",
    image: blog3,
    link: "#",
    date: "April 9, 2025",
    description: "A fascinating tour through the National Museum of Natural History, showcasing the Philippines' rich biodiversity."
  },
  { 
    title: " Hytec Power & INC Visit",
    image: blog4,
    link: "#",
    date: "April 10, 2025",
    description: "Visiting Hytec Power facilities  experiencing industrial landmark"
  },
  {
    title: " Light Rail Transit Authority Line 2",
    image: blog5,
    link: "#",
    date: "April 11, 2025",
    description: "Riding the LRT Line 2 to understand Manila's public transportation system and urban mobility challenges."
  },
  {
    title: " Bell Church Experience",
    image: blog6,
    link: "#",
    date: "April 12, 2025",
    description: "A peaceful visit to the Bell Church in Baguio, experiencing its unique blend of Chinese and Filipino architecture and culture."
  },
  {
    title: "Baguio Night Market",
    image: blog7,
    link: "#",
    date: "April 13, 2025",
    description: "Me and My Friends Roaming Around Baguio's Night Market Trying to find something to buy like  souvenirs or food.",
    className: "baguio-market"
  }
  
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="blogs-section" id="blogs">
      <h2 className="blogs-title">Blogs</h2>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div 
            key={index} 
            className="blog-card"
            onClick={() => setSelectedBlog(blog)}
          >
            <div className="blog-image-wrapper">
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-image"
              />
              <div className="blog-overlay">
                <span className="preview-text">View Details</span>
              </div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <div className="blog-meta">
                <span className="blog-date">
            
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BlogModal 
        isOpen={!!selectedBlog}
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </section>
  );
};

export default Blogs;