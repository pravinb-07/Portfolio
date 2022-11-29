import React from "react";
import "./exp.css";

const Experience = () => {
  return (
    <section id="exp">
      <h5>A Man is But</h5>
      <h2>What He Knows</h2>
      <div className="container exp-container">
        <div className="head">
          Coding Languages :
          <div className="con">
            <span>
              <button className="badge">C</button>
              <button className="badge">Java</button>
              <button className="badge">Python</button>
            </span>
          </div>
        </div>
        <div className="head">
          Front End :
          <div className="con">
            {" "}
            <span>
              <button className="badge">HTML</button>
              <button className="badge">CSS</button>
              <button className="badge">BootStrap</button>
              <button className="badge">ReactJs</button>
            </span>
          </div>
        </div>
        <div className="head">
          Back End :
          <div className="con">
            {" "}
            <span>
              <button className="badge">Nodejs</button>
              <button className="badge">Django</button>
            </span>
          </div>
        </div>
        <div className="head">
          Data Bases :
          <div className="con">
            {" "}
            <span>
              <button className="badge">MySQL</button>
              <button className="badge">MongoDB</button>
            </span>
          </div>
        </div>

        <div className="head">
          Others :
          <div className="con">
            {" "}
            <span>
              <button className="badge">Video Creation</button>
              <button className="badge">Premiere Pro</button>
              <button className="badge">After Effects</button>
              <button className="badge">PhotoShop</button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
