import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Navbar from "./components/navbar";
import Hero from "./components/heroSection";
import Card from "./components/card";
// importing array with iems that we shall use the map method
import data from "./components/data";
// console.log(data);

// array to store
const dataElements = data.map((item) => {
  return (
    <Card
      key={item.id}
      image={item.image}
      figure={item.figure}
      rating={item.rating}
      cardheading={item.cardheading}
      cardparagraph={item.cardparagraph}
      alt={item.alt}
      location={item.location}
    />
  );
});
ReactDOM.render(
  <React.StrictMode className="container mx-auto ">
    <Navbar image="airbnb.png" />
    <Hero image="Group77.png" />
    {/* When passing images as props, we only include the name of the image and not the file path */}
    {/* when passing non string values as props, we put them in braces with no */}
    <section className="container mx-auto flex">{dataElements}</section>
  </React.StrictMode>,
  document.getElementById("root")
);
