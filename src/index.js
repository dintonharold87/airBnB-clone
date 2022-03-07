import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navbar from './components/navbar'
import Hero from "./components/heroSection";
import Card from "./components/card"


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

