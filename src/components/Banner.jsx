import React, { useState } from "react";

const Banner = () => {
  const [activeButton, setActiveButton] = useState("Arrivals");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };
  return (
    <div className="flex h-40 max-w-full  justify-center bg-avion-blue">
      <div className="flex w-full max-w-screen-lg flex-col ">
        <div className="h-1/2 w-1/2 items-center">
          <div className="mt-6 flex flex-row justify-between">
            <h1 className="text-4xl text-white ">FLIGHTS</h1>
            <div className=" text flex w-auto flex-row items-center justify-center rounded bg-gray-300 p-1 font-Gupter text-2xl">
              <button
                onClick={() => handleButtonClick("Arrivals")}
                style={{
                  color:
                    activeButton === "Arrivals" ? "white" : "rgb(87,96,113)",
                  backgroundColor:
                    activeButton === "Arrivals"
                      ? "rgb(55, 98, 182)"
                      : "transparent",
                  padding: "2px",
                  borderRadius: "5px",
                }}
              >
                Arrivals
              </button>
              <button
                onClick={() => handleButtonClick("Departures")}
                style={{
                  color:
                    activeButton === "Departures" ? "white" : "rgb(87,96,113)",
                  backgroundColor:
                    activeButton === "Departures"
                      ? "rgb(55, 98, 182)"
                      : "transparent",
                  padding: "2px",
                  borderRadius: "5px",
                }}
              >
                Departures
              </button>
            </div>
            <div className="flex items-center text-white">
              <button className="flex text-center">
                <span className="material-icons text-white">refresh</span>
                Refresh
              </button>
            </div>
          </div>
        </div>

        <div className="h-1/2 items-center justify-between">
          <ul className="flex h-full w-full flex-row items-center justify-around font-Gupter text-2xl text-white text-opacity-70">
            <li>Airline</li>
            <li>|</li>
            <li>Flight Number</li>
            <li>|</li>
            <li>Date</li>
            <li>|</li>
            <li>Time</li>
            <li>|</li>
            <li>From</li>
            <li>|</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
