import React from "react";

export default function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio</h1>

      <div className="card-body" style={{width: "18rem"}}>
        <p className="card-text">Get to Work</p>
      </div>
      <div className="card">
        <a
          href="https://stormy-fortress-72998.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/get-to-work.png" alt="get-to-work-app" />
        </a>
      </div>

      <div className="card-body">
        <p className="card-text">Code Quiz</p>
      </div>
      <div className="card">
        <a
          href="https://curriecoder.github.io/code-quiz/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/code-quiz.png" alt="code-quiz-app" />
        </a>
      </div>

      <div className="card-body">
        <p className="card-text">Weather Dashboard</p>
      </div>
      <div className="card">
        <a
          href="https://curriecoder.github.io/weather-dashboard/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/images/weather-forecast.png"
            alt="weather-dashboard-app"
          />
        </a>
      </div>

      <div className="card-body">
        <p className="card-text">Pack Rat</p>
      </div>
      <div className="card">
        <a
          href="https://nazikbestcoder.github.io/Pack-Rat/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/pack-rat-scrnsht.png" alt="pack-rat-app" />
        </a>
      </div>

      <div className="card-body">
        <p className="card-text">Cat and Mouse Game</p>
      </div>
      <div className="card">
        <a
          href="https://scratch.mit.edu/projects/562229393/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/cat-and-mouse.png" alt="cat-and-mouse-app" />
        </a>
      </div>

      <div className="card-body">
        <p className="card-text">PWA Budget Tracker</p>
      </div>
      <div className="card">
        <a
          href="https://fierce-dawn-66408.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/images/pwa-budget-tracker.png"
            alt="pwa-budget-tracker-app"
          />
        </a>
      </div>
    </div>
  );
}
