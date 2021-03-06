import React from "react";
import resume from "../../assets/images/resume.png";

export default function Resume() {
  return (
    <div className="container">
      <h1>Resume/CV</h1>
      <div className="row justify-content-center">
        <img className="col-6" src={resume}></img>
      </div>

      <div className="text-center m-4">
        <a
          href="https://docs.google.com/document/d/1QHnXt5mxQQKwaYkD0Ssa4CHcOxsQ5gnl5K5B2Ppk4Pc/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Click here to open in a new window.
        </a>
      </div>
    </div>
  );
}
