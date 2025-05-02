
import '../../assets/styles/whatido.css';

import webDevIcon from '../../assets/images/svg/code.svg';
import dataBaseICon from '../../assets/images/svg/database.svg';
import cogICon from '../../assets/images/svg/cog.svg';


const WhatIDo = () => {
  return (
    <section className="whatido" id="whatido" >
      <h2 className="section-title">What I Do</h2>
      <div className="services">
        <div className="service">
          <img src={webDevIcon}  alt="Web Development" className="service-icon" />
          <h3 className="service-title">Web Development</h3>
          <p className="service-description">
            Creating responsive and dynamic websites using modern technologies.
          </p>
        </div>
        <div className="service">
          <img src= {dataBaseICon   } alt="Database Management" className="service-icon" />
          <h3 className="service-title">Database Management</h3>
          <p className="service-description">
            Designing and managing efficient databases for storing and retrieving data.
          </p>
        </div>
        <div className="service">
          <img src={cogICon} alt="API Integration" className="service-icon" />
          <h3 className="service-title">API Integration</h3>
          <p className="service-description">
            Integrating third-party APIs to enhance website functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
