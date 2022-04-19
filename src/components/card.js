import React from "react";

import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";
export default function Card({
  image,
  alt,
  rating,
  figure,
  cardparagraph,
  cardheading,
  location,
  openSpots,
  item
}) {
  return (
    <IconContext.Provider value={{ color: "red", size: "0.5em" }}>
      <div className="container flex flex-row mx-auto w-1/2 relative">
        <div className="experiencesection flex items-start justify-center pl-16 pr-20 pt-8 pb-12">
          <div className="Frame8 inline-flex flex-col space-y-9 items-start justify-start">
            <div className="Frame7 inline-flex space-x-9 items-start justify-start ">
              <div className="Frame4 inline-flex flex-col items-start justify-start relative">
                {/* Conditional rendering, to display the sold out part if open spots is  equal to zero */}
                {item.openSpots === 0 &&<div className="card_badge">SOLD OUT</div>}
                <img
                  src={`../images/${item.image}`}
                  className="image12 w-full h-60 rounded-lg "
                  alt={item.alt}
                />

                <div className="Frame2 flex flex-col space-y-2 items-start justify-start">
                  <div className="Frame3 inline-flex space-x-0.5 items-start justify-start">
                    <FaStar />
                    <p className="5.0 w-4 h-full text-xs font-light leading-3 text-gray-900">
                      {item.figure}
                      <br />
                    </p>
                    <p className="(6) w-4 h-full text-xs font-light leading-3 text-gray-400">
                      {item.rating}
                    </p>
                    <div className="Ellipse6 w-0.5 h-0.5 bg-gray-400 rounded-full" />
                    <p className="USA w-6 h-full text-xs font-light leading-3 text-gray-400">
                      {item.location}
                    </p>
                  </div>
                  <p className="Lifelessons with Katie Zaferes w-full h-1/4 text-xs font-light leading-3 text-gray-900">
                    {item.cardheading}
                    <br />
                  </p>
                  <p className="From$136 / person w-36 h-1/4 text-xs leading-3 text-gray-900">
                    {item.cardparagraph} / person
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
