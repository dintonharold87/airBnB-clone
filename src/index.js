import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Navbar from "./components/navbar";
import Hero from "./components/heroSection";
import Card from "./components/card";

ReactDOM.render(
  <React.StrictMode className="container mx-auto ">
    <Navbar />
    <Hero />
    {/* When passing images as props, we only include the name of the image and not the file path */}
    {/* when passing non string values as props, we put them in braces with no */}
    <Card
      image="swimmer.png"
      figure="5.0"
      rating="(6)"
      cardheading="Life lessons with Katie Zaferes"
      cardparagraph="From $136"
      alt="swimming"
    />
    <Card
      image="wedding-photography 1.png"
      figure="5.0"
      rating="(30)"
      cardheading="Learn wedding photography
"
      cardparagraph="From $125"
      alt="wedding"
    />
    <Card
      image="mountainbike.png"
      figure="4.8"
      rating="(2)"
      cardheading="Group Mountain Biking"
      cardparagraph="From $50"
      alt="bicycle"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
