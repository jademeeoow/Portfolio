import "../assets/styles/about_me.css";

const AboutMe = () => {
  return (
    <section className="about-me" id="aboutme">
      <h2 className="about-section-title">About Me</h2>
      
     
  

      <div className="about-content">
        <p>
          Hi, I'm a <strong>Back-end developer</strong> with a passion for building scalable, 
          reliable, and high-performing systems. My expertise lies in <strong>PHP, Django, 
           React, SQL, and Cloud services</strong>, allowing me to create efficient and 
          maintainable architectures.
        </p>

        <p>
          I love <strong>technical problems</strong> and optimizing workflows, ensuring that 
          applications run smoothly. Whether it's debugging or enhancing system efficiency, 
          I'm always up for a challenge.
        </p>

        <hr className="divider" />

        <h3 className="about-subtitle">Beyond Coding</h3>
        <p>
          When I’m not working, you’ll find me gaming! I’m skilled in <strong>Dota, Mobile 
          Legends, and Clash of Clans</strong>, where I apply strategic thinking and teamwork
          much like in development.
        </p>

        <hr className="divider" />

        <h3 className="about-subtitle">Let's Connect!</h3>
        <p>
          I’m always open to collaborating on exciting projects. Feel free to{" "}
          <a href="#contact" className="contact-link">reach out</a> let’s build something great together!
        </p>

       
      </div>
    </section>
  );
};

export default AboutMe;
