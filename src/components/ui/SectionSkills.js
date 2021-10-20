import '../../css/sectionskills.css'
import React from "react";

export const SectionSkills = () => {
  return (
    <div className="panel-section section3" id="skills">
      <h1 data-splitting className="bigh1 section-title"> Habilidades</h1>
      
      <div className="container">
        <div className="skill-box">
         <i className="fab fa-react"></i>
        </div>
        <div className="skill-box">
         <i className="fab fa-js"></i>
        </div>
        <div className="skill-box">
         <i className="fab fa-vuejs"></i>
        </div>
        <div className="skill-box">
         <i className="fab fa-html5"></i>
        </div>
        <div className="skill-box">
         <i className="fab fa-sass"></i>
        </div>
      </div>
      <div className="container">
        
      <div className="skill-box">
         <i className="fab fa-node"></i>
        </div>
        <div className="skill-box">
         <i className="fab fa-npm"></i>
        </div>
        <div className="skill-box">
         <i className="fab fa-python"></i>
        </div>
        <div className="skill-box">
         <i className="fab fa-aws"></i>
        </div>
        <div className="skill-box">
         <i className="fab fa-git-alt"></i>
        </div>
      </div>
    </div>
  );
};
