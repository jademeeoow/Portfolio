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
    description: "We spent an unforgettable day wandering through the vast and historic grounds of Rizal Park, right in the heart of Manila. As we strolled along its wide promenades, we stopped at the iconic Rizal Monument, quietly reflecting on the legacy of the national hero. The park buzzed with locals enjoying picnics, joggers looping the gardens, and children playing near the fountains. It felt like a perfect fusion of past and present a living monument to history set within a vibrant, modern city. Every corner seemed to whisper stories of colonial struggles, independence, and the undying Filipino spirit.."
  },
  {
    title: " SBMA Seaport Adventure",
    image: blog2,
    link: "#",
    date: "April 8, 2025",
    description: "Our journey brought us to the bustling SBMA Seaport, a fascinating blend of maritime commerce and coastal leisure. As the salty breeze kissed our faces, we watched massive cargo ships dock and unload, their towering cranes moving with mechanical grace. But it wasn’t all industry along the boardwalk were cozy cafés and seaside parks where families gathered and tourists took photos against the glittering bay. We even caught a glimpse of a few yachts bobbing gently in the harbor, reminding us of the luxurious side of seafaring life. The mix of work and play gave the area an unexpected charm that was both energetic and relaxing."
  },
  {
    title: " National Museum of Natural History",
    image: blog3,
    link: "#",
    date: "April 9, 2025",
    description: "Stepping into the National Museum of Natural History felt like entering a grand time capsule. From the moment we were greeted by the awe-inspiring Tree of Life structure at the center, we knew we were in for something special. Each exhibit took us deeper into the rich biodiversity of the Philippines from towering dinosaur skeletons to vivid dioramas of the country's unique flora and fauna. We marveled at preserved species found nowhere else in the world and even got hands-on with interactive displays. By the end of the tour, we walked out not only more informed, but filled with a renewed sense of wonder for the natural world around us."
  },
  { 
    title: " Hytec Power & INC Visit",
    image: blog4,
    link: "#",
    date: "April 10, 2025",
    description: "Our visit to Hytec Power was nothing short of eye-opening. The facility stood like a monument to engineering and innovation, its metallic framework gleaming under the midday sun. Inside, we were led through the various departments each humming with machinery and expertise. Engineers and technicians guided us through the intricate processes that drive the country’s industrial power backbone. What impressed us most was the company's commitment to sustainable energy and efficiency. It wasn’t just a tour it was a deep dive into the inner workings of modern industry and a glimpse into the future of Filipino technological advancement."
  },
  {
    title: " Light Rail Transit Authority Line 2",
    image: blog5,
    link: "#",
    date: "April 11, 2025",
    description: "Our experience aboard the LRT Line 2 offered more than just a ride it gave us insight into the daily lives of thousands of Manila commuters. As the train glided smoothly above the city, we observed the sea of rooftops and busy streets below. Each station told its own story some surrounded by bustling markets, others framed by towering office buildings. Speaking to fellow passengers, we learned about the challenges they face: overcrowding, delays, and the urgent need for modernization. But amidst it all, there was resilience a determination to keep moving forward, no matter the obstacles. The LRT wasn’t just a mode of transport; it was a lifeline connecting stories across the city."
  },
  {
    title: " Bell Church Experience",
    image: blog6,
    link: "#",
    date: "April 12, 2025",
    description: "Tucked away on the outskirts of Baguio, the Bell Church greeted us with its ornate arches, dragon statues, and vivid red lanterns swaying gently in the cool mountain breeze. The temple grounds were serene, offering panoramic views of the surrounding hills. As we walked through its quiet corridors,  We admired the intricate fusion of Chinese and Filipino architectural styles. The air was filled with a sense of calm reverence, broken only by the occasional toll of the ceremonial bell. It was a spiritual retreat from the hustle of city life, a place where cultures converged in peace and harmony."
  },
  {
    title: "Baguio Night Market",
    image: blog7,
    link: "#",
    date: "April 13, 2025",
    description: "When night fell in Baguio, we found ourselves drawn to the vibrant energy of the night market. The air buzzed with the chatter of bargain hunters and the irresistible aroma of street food. My friends and I wandered from stall to stall, our eyes wide with excitement. There were racks of thrifted clothes, handcrafted trinkets, and rows of steaming delicacies from grilled isaw  to a fresh strawberry taho. It felt like a treasure hunt where every find told a story. Laughter echoed as we haggled playfully and snacked on everything we could carry. That night, the market wasn't just a shopping spot it was the heartbeat of Baguio's nightlife.",
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