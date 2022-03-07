import React from "react";
import swimmer from "../images/swimmer.png";
import star from "../images/Star 1.png";
export default function Card() {
  return (
    <div className="card">
      <img src={swimmer} alt="" className="swimmer"></img>
      <div className="card-stats">
        <img src={star} alt="" className="star"></img>
        <span className="card-figure">5.0</span>
        <span className="card-rating">(6) .</span>
        <span className="card-country">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>From $136 / person</p>
    </div>
  );
}
