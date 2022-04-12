import React from "react";

import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";

export default function Card({ img, alt, rating, figure, cardparagraph, cardheading }) {
 
  return (
    <IconContext.Provider value={{ color: "red", size: "0.5em" }}>
      <div className="container flex flex-row mx-auto w-1/2">
        <div
          className="experiencesection flex items-start justify-center pl-16 pr-20 pt-8 pb-12"
          style={{ width: 744, height: 533 }}
        >
          <div
            className="Frame8 inline-flex flex-col space-y-9 items-start justify-start"
            style={{ width: 600, height: 452 }}
          >
            <div
              className="Frame7 inline-flex space-x-9 items-start justify-start"
              style={{ width: 600, height: 304 }}
            >
              <div className="Frame4 inline-flex flex-col space-y-2.5 items-start justify-start">
                <img
                  src={img}
                  className="image12 w-full h-60 rounded-lg"
                  alt={alt}
                />

                <div className="Frame2 flex flex-col space-y-2 items-start justify-start">
                  <div className="Frame3 inline-flex space-x-0.5 items-start justify-start">
                    <FaStar />
                    <p className="5.0 w-4 h-full text-xs font-light leading-3 text-gray-900">
                      {figure}
                      <br />
                    </p>
                    <p className="(6) w-4 h-full text-xs font-light leading-3 text-gray-400">
                      {rating}
                    </p>
                    <div className="Ellipse6 w-0.5 h-0.5 bg-gray-400 rounded-full" />
                    <p className="USA w-6 h-full text-xs font-light leading-3 text-gray-400">
                      USA
                    </p>
                  </div>
                  <p className="Lifelessons with Katie Zaferes w-full h-1/4 text-xs font-light leading-3 text-gray-900">
                    {cardheading}
                    <br />
                  </p>
                  <p className="From$136 / person w-36 h-1/4 text-xs leading-3 text-gray-900">
                    {cardparagraph} / person
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
