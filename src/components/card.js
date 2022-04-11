import React from "react";
import swimmer from "../images/swimmer.png";
import bike from "../images/mountainbike.png";
import wed from "../images/wedding-photography 1.png";
export default function Card(props) {
  console.log(props);
  return (
    <div className="container mx-auto w-1/2">
      <div
        className="experiencesection inline-flex items-start justify-center pl-16 pr-20 pt-8 pb-12"
        style={{ width: 744, height: 533 }}
      >
        <div
          className="Frame8 inline-flex flex-col space-y-9 items-start justify-start"
          style={{ width: 600, height: 452 }}
        >
          <div className="Frame1 flex flex-col space-y-4 items-start justify-start">
            <p className="OnlineExperiences w-full text-4xl font-semibold leading-10">
              Online Experiences
            </p>
            <p className="Joinunique interactive activities led by one-of-a-kind hosts—all without leaving home. w-80 h-1/2 text-base font-light leading-none text-gray-900">
              Join unique interactive activities led by one-of-a-kind hosts—all
              without leaving home.
              <br />
            </p>
          </div>
          <div
            className="Frame7 inline-flex space-x-9 items-start justify-start"
            style={{ width: 600, height: 304 }}
          >
            <div className="Frame4 inline-flex flex-col space-y-2.5 items-start justify-start">
              <img
                src={swimmer}
                alt="swimming"
                className="image12 w-full h-60 rounded-lg"
              />
              <div className="Frame2 flex flex-col space-y-2 items-start justify-start">
                <div className="Frame3 inline-flex space-x-0.5 items-start justify-start">
                  <p className="5.0 w-4 h-full text-xs font-light leading-3 text-gray-900">
                    5.0
                    <br />
                  </p>
                  <p className="(6) w-4 h-full text-xs font-light leading-3 text-gray-400">
                    (6)
                  </p>
                  <div className="Ellipse6 w-0.5 h-0.5 bg-gray-400 rounded-full" />
                  <p className="USA w-6 h-full text-xs font-light leading-3 text-gray-400">
                    USA
                  </p>
                </div>
                <p className="Lifelessons with Katie Zaferes w-full h-1/4 text-xs font-light leading-3 text-gray-900">
                  Life lessons with Katie Zaferes
                  <br />
                </p>
                <p className="From$136 / person w-36 h-1/4 text-xs leading-3 text-gray-900">
                  From $136 / person
                  <br />
                </p>
              </div>
            </div>
            <div className="Frame5 inline-flex flex-col space-y-2.5 items-start justify-start">
              <img
                src={wed}
                alt="Wedding"
                className="wedding-photography1 w-full h-60 rounded-lg"
              />
              <div className="Frame2 flex flex-col space-y-2 items-start justify-start">
                <div className="Frame3 inline-flex space-x-0.5 items-start justify-start">
                  <p className="5.0 w-4 h-full text-xs font-light leading-3 text-gray-900">
                    5.0
                    <br />
                  </p>
                  <p className="(6) w-4 h-full text-xs font-light leading-3 text-gray-400">
                    (6)
                  </p>
                  <div className="Ellipse6 w-0.5 h-0.5 bg-gray-400 rounded-full" />
                  <p className="USA w-6 h-full text-xs font-light leading-3 text-gray-400">
                    USA
                  </p>
                </div>
                <p className="Lifelessons with Katie Zaferes w-full h-1/4 text-xs font-light leading-3 text-gray-900">
                  Life lessons with Katie Zaferes
                  <br />
                </p>
                <p className="From$136 / person w-36 h-1/4 text-xs leading-3 text-gray-900">
                  From $136 / person
                  <br />
                </p>
              </div>
            </div>
            <div className="Frame6 inline-flex flex-col space-y-2.5 items-start justify-start">
              <img
                src={bike}
                alt="bike"
                className="mountain-bike1 w-full h-60 rounded-lg"
              />
              <div className="Frame2 flex flex-col space-y-2 items-start justify-start">
                <div className="Frame3 inline-flex space-x-0.5 items-start justify-start">
                  <p className="5.0 w-4 h-full text-xs font-light leading-3 text-gray-900">
                    5.0
                    <br />
                  </p>
                  <p className="(6) w-4 h-full text-xs font-light leading-3 text-gray-400">
                    (6)
                  </p>
                  <div className="Ellipse6 w-0.5 h-0.5 bg-gray-400 rounded-full" />
                  <p className="USA w-6 h-full text-xs font-light leading-3 text-gray-400">
                    USA
                  </p>
                </div>
                <p className="Lifelessons with Katie Zaferes w-full h-1/4 text-xs font-light leading-3 text-gray-900">
                  Life lessons with Katie Zaferes
                  <br />
                </p>
                <p className="From$136 / person w-36 h-1/4 text-xs leading-3 text-gray-900">
                  From $136 / person
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
