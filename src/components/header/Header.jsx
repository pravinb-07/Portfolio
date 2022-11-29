import React from "react";
import "./header.css";
import Cta from "./Cta";
import Me from "../../assests/me.png"
import HeaderSos from "./HeaderSos";

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 id="home">Hello, I'm</h5>
        <h1>Pravin</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <Cta />
        <HeaderSos />
        <div className="me"><img src={Me} alt="me" /></div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};
