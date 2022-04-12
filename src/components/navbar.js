import React from "react";
import logo from "../images/airbnb 1.png";
export default function Navbar() {
  return (
    <div className="container mx-auto shadow w-1/2 p-8">
      <img src={logo} alt="logo" className="navbar  rounded-lg " />
    </div>
  );
}
