import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu } from '@headlessui/react';
import { Fragment } from 'react'

import ChevronDown from "../assets/icons/chevron-down.svg";
import ArrivalTable from "./ArrivalTable";

const Banner = ({ airportData, onButtonClick }) => {
  const [activeButton, setActiveButton] = useState("Arrivals");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
    onButtonClick(buttonName);
  };

  return (
    <>
    <div className="flex h-24 max-w-full  justify-center bg-avion-blue">
      <div className="flex w-full max-w-screen-lg flex-col ">
        <div className="h-1/2 items-center">
          <div className="mt-6 flex flex-row justify-between">
            <div><h1 className="text-4xl text-white ">FLIGHTS</h1></div>
            <div className=" text flex w-auto flex-row items-center justify-center rounded bg-gray-300 p-1 font-Gupter text-2xl">
              <button
                name="arrivalsToggle"
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
  

            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="bg-blue-500 text-white py-2 px-4 rounded-md w-40 flex justify-center">
                      <div>Airports</div> 
                      <div><img src={ChevronDown}></img></div>
                    </Menu.Button>
                    {open && (
                      <Menu.Items
                        className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg"
                        style={{ width: '100%' }}
                      >
                        {Array.isArray(airportData) && airportData.length > 0 ? (
                          airportData.map((airport) => (
                            <Menu.Item key={airport.id} as={Fragment}>
                              {({ active }) => (
                                <a
                                  href={`/airport/${airport.name}`}
                                  className={`block px-4 py-2 ${
                                    active ? 'bg-blue-500 text-white' : 'text-gray-700'
                                  } hover:bg-blue-100 hover:text-blue-800`}
                                >
                                  {airport.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))
                        ) : (
                          <Menu.Item>
                            <span className="block px-4 py-2 text-gray-700">
                              No airports available
                            </span>
                          </Menu.Item>
                        )}
                      </Menu.Items>
                    )}
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ArrivalTable />
    </>
  );
};

Banner.propTypes = {
  airportData: PropTypes.array.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Banner;
