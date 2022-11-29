import React from "react";
import "./portfolio.css";
import Pimg from "../../assests/Img1.png";
const Portfolio = () => {
  return (
    <section id="port">
      <h5>The Only Source of Knowledge is</h5>
      <h2>Experience</h2>
      <div className="container portfolio-container">
        <article className="port-item">
          <div className="port-img">
            <img src={Pimg} alt="Img" />
            <h3>Item</h3>
            <div className="port-cta">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href="https://dribbble.com/Alien_pixels"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="port-item">
          <div className="port-img">
            <img src={Pimg} alt="Img" />
            <h3>Item</h3>
            <div className="port-cta">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href="https://dribbble.com/Alien_pixels"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
