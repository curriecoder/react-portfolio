import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-item">555-555-5555</li>
        <li className="footer-item">
          <a
            href="mailto:andrew.j.currie0@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            andrew.j.currie0@gmail.com
          </a>
        </li>
        <li className="footer-item">
          <a
            href="https://github.com/curriecoder"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </li>
        <li className="footer-item">
          <a
            href="https://www.linkedin.com/in/andrew-currie-43423421a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
        <li className="footer-item">
          <a
            href="https://soundcloud.com/user-956212347"
            target="_blank"
            rel="noreferrer"
          >
            SoundCloud Profile
          </a>
        </li>
      </ul>
    </div>
  );
}