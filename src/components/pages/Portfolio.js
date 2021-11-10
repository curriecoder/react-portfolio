import React from "react";

export default function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <div className="row justify-content-between align-items-center my-5">
        <div className="card my-2">
          <img src="/assets/images/get-to-work.png" alt="get-to-work-app" />

          <div className="card-body">
            <p className="card-text">
              <a
                href="https://stormy-fortress-72998.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Get to Work
              </a>
            </p>
          </div>
        </div>

        <div className="card">
          <img src="/assets/images/code-quiz.png" alt="code-quiz-app" />
          <div className="card-body">
            <p className="card-text">
              <a
                href="https://curriecoder.github.io/code-quiz/"
                target="_blank"
                rel="noreferrer"
              >
                Code Quiz
              </a>
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="/assets/images/weather-forecast.png"
            alt="weather-dashboard-app"
          />
          <div className="card-body">
            <p className="card-text">
              <a
                href="https://curriecoder.github.io/weather-dashboard/"
                target="_blank"
                rel="noreferrer"
              >
                Weather Dashboard
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-between align-items-center my-5">
        <div className="card" style={{ width: "25rem" }}>
          <img src="/assets/images/pack-rat-scrnsht.png" alt="pack-rat-app" />

          <div className="card-body">
            <p className="card-text">
              <a
                href="https://nazikbestcoder.github.io/Pack-Rat/"
                target="_blank"
                rel="noreferrer"
              >
                Pack Rat
              </a>
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "25rem" }}>
          <img src="/assets/images/cat-and-mouse.png" alt="cat-and-mouse-app" />
          <div className="card-body">
            <p className="card-text">
              <a
                href="https://scratch.mit.edu/projects/562229393/"
                target="_blank"
                rel="noreferrer"
              >
                Cat and Mouse Game
              </a>
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "25rem" }}>
          <img
            src="/assets/images/pwa-budget-tracker.png"
            alt="pwa-budget-tracker-app"
          />
          <div className="card-body">
            <p className="card-text">
              <a
                href="https://fierce-dawn-66408.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                PWA Budget Tracker
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
