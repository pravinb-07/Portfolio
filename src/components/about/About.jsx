import React from "react";
import res from "../../assests/res.JPG";
import { FiAward } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { RiFoldersLine } from "react-icons/ri";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>If you Know Me</h5>
      <h2>You know My Story</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={res} alt="ME" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5> Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about_card">
              <RiUser3Line className="about_icon" />
              <h5> Age</h5>
              <small>22</small>
            </article>

            <article className="about_card">
              <RiFoldersLine className="about_icon" />
              <h5> Projects</h5>
              <small>546</small>
            </article>
          </div>

          <p>
            <div className="des">
              Hi, I am a highly passionate Full Stack developer currently
              shaping the future of my career by designing responsive Web
              applications with ReactJs, NodeJs, JavaScript, and some other cool
              libraries and frameworks while traveling around. If you have a
              great project that needs some dope skills, I'm your guy.
            </div>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
