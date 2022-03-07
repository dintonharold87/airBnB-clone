import React from "react";
import grid from "../images/Group 77.png";
export default function Hero() {
  return (
    <section>
      <img src={grid} alt="hero_section" className="hero-image"></img>
      <h1 className="hero-heading"> Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
