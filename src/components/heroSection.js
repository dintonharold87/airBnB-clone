import React from "react";
import grid from "../images/Group 77.png";
export default function Hero() {
  return (
    <section className="container mx-auto w-1/2 mt-4">
      <img
        src={grid}
        alt="hero_section"
        className="max-w-full h-auto"
      ></img>
    </section>
  );
}
