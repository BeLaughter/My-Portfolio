import React from "react";
import "./Skills.css";
import js from "../assets/js.png";
import css from "../assets/css.png";
import html from "../assets/html.png";

import tail from "../assets/tail.png";
import react from "../assets/react.png";
const Skills = () => {
  return (
    <div className="pad">
      <h1 className="projecth1">Skills</h1>
      <div className="flex-containerk">
        <div className="skill">
          <img src={html} alt="html" className="d-block w-100 skil" />
        </div>
        <div className="skill">
          <img src={css} alt="css" className="d-block w-100 skil" />
        </div>
        <div className="skill">
          <img src={js} alt="JavaScript" className="d-block w-100 skil" />
        </div>
        <div className="skill">
          <img src={tail} alt="Tail" className="d-block w-100 skil" />
        </div>
        <div className="skill">
          <img src={react} alt="React" className="d-block w-100 skil" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
