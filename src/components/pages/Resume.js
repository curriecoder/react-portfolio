import React from "react";
import resumeImg from "../../assets/images/Resume.png";

export default function Resume() {
  return (
    <div className="container">
      <h1>Resume</h1>
      <a href="/assets/pdf/Coding-Resume.pdf" target="_blank" rel="noreferrer">
        Click here to open my resume in a new tab.
      </a>
      <br />
      <img src={resumeImg} alt="resume" />
    </div>
  );
}
