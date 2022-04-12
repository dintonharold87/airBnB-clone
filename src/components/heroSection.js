import React from "react";
import grid from "../images/Group 77.png";
export default function Hero() {
  return (
    <section className="container mx-auto w-1/2 mt-4">
      <img src={grid} alt="hero_section" className="max-w-full h-auto"></img>
      <div className="Frame1 flex flex-col space-y-4 items-start justify-start mt-4">
        <p className="OnlineExperiences w-full text-4xl font-semibold leading-10">
          Online Experiences
        </p>
        <p className="Joinunique interactive activities led by one-of-a-kind hosts—all without leaving home. w-80 h-1/2 text-base font-light leading-none text-gray-900">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
          <br />
        </p>
      </div>
    </section>
  );
}
