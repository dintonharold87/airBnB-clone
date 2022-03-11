import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Navbar from "./components/navbar";
import Hero from "./components/heroSection";
import Card from "./components/card";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    {/* <Card
      img="./images/swimmer.png"
      figure="5.0"
      rating="(6)"
      cardheading="Life lessons with Katie Zaferes"
      cardparagraph="From $136"
    />
    <Card
      img="./images/wedding-photography 1.png"
      figure="5.0"
      rating="(30)"
      cardheading="Learn Wedding Photography"
      cardparagraph="From $125"
    /> */}
    <Card
      image="./images/mountainbike.png"
      figure="4.8"
      rating="(2)"
      cardheading="Group Mountain Biking"
      cardparagraph="From $50"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
