import React from "react";
// import swimmer from "../images/swimmer.png";
import star from "../images/Star 1.png";
export default function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <img alt="" className="swimmer" src={props.img} />
      <div className="card-stats">
        <img src={star} alt="" className="star"></img>
        <p>
          <span className="card-figure">{props.figure}</span>
          <span className="card-rating">{props.rating}</span>
          <span className="card-ellipse">.</span>
          <span className="card-country">USA</span>
        </p>
      </div>
      <p className="card-heading">{props.cardheading}</p>
      <p>
        <span className="card-paragraph">{props.cardparagraph}</span>
        <span className="card-body">/ person</span>
      </p>
    </div>
  );
}
