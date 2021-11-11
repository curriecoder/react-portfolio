import React from "react";

// use an a tag to open in new tab target=_blank noopener.
export default function Resume() {
  return (
    <div className="container">
      <h1>Resume</h1>
      <a href="/assets/pdf/Coding-Resume.pdf" target="_blank" rel="noreferrer">
        Click here to open my resume in a new tab.
      </a>
      <br />
      <img src="/assets/images/Resume.png" alt="resume" />
    </div>
  );
}
