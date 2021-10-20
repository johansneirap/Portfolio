import React from "react";
import { SectionAbout } from "./SectionAbout";
import { SectionIntro } from "./SectionIntro";
import { SectionSkills } from "./SectionSkills";
import { SectionWorks } from "./SectionWorks";

export const Contentsection = () => {
  return (
    <div className="content-section col offset-1" >
      <SectionIntro />
      <SectionAbout />
      <SectionSkills />
      <SectionWorks />
    </div>
  );
};
