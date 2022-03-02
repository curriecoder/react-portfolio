import React from "react";

// TODO: Fix avatar overrunning 'about' section (put avatar on index)
export default function About() {
  return (
    <div className="container">
      <h1 className="mx-auto">About Me</h1>
      {/* TODO: Update about me and include mission statement */}
      <p className="mx-auto my-5">
        Born in Missouri and raised in Arizona, I have spent many of my adult
        years looking for my tribe, I feel I finally have found them in the
        field of programming! My first time experiencing the joys (and
        headaches) of coding was when I was 11 years old. At that time my school
        was working with HTML 3.2, doing pretty much everything in-line. I
        continued playing around with HTML and CSS for many years and now I'm
        back with renewed vigor! I served in the U.S. Army for five years
        straight out of high school, learning much about the world during that
        time. After that chapter had closed, I began searching for my next
        adventure in past passions. I started self educating in C++ and
        eventually Python to see if it was an activity I still enjoyed. The
        excitement was still present with every new hurdle passed and knowledge
        gained. I am thrilled to be starting a new career as a junior full stack
        web developer!
      </p>
    </div>
  );
}
