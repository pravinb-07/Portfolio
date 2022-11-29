import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineDeveloperMode } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer-logo">
        <MdOutlineDeveloperMode /> Pravin
      </a>
      
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#exp">Skills</a>
        </li>
        <li>
          <a href="#port">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="fs">
        <a
          href="https://www.linkedin.com/in/pravinb07"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <BsLinkedin />{" "}
        </a>
        <a
          href="https://github.com/pravinb-07"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/iam.praveen._/"
          rel="noreferrer"
          target="_blank"
        >
          <BsInstagram />
        </a>
      </div>

      <div className="cpw">
        <small>&copy; Built by Pravin</small>
      </div>
    </footer>
  );
};

export default Footer;
