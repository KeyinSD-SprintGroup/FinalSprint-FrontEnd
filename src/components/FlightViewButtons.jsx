import React from "react";
import AlarmIcon from "../assets/icons/alarm-02.svg";
import PlaneIcon from "../assets/icons/plane.svg";
import LuggageIcon from "../assets/icons/luggage-02.svg";

const FlightViewButtons = () => {

  return (
    <div className="flex max-w-full  justify-center">
      <div className="flex w-full max-w-screen-lg flex-col justify-center items-center">
        <div className="h-1/2 w-full items-center">
          <div className="mt-6 flex flex-row justify-between">
            <div className="flex w-full justify-between mb-20 text-lg">
              <button className="bg-yellow-400 p-16 rounded w-1/4 text-gray-600 shadow-xl">Delays<img className="pl-9" src={AlarmIcon}></img></button>
              <button className="bg-green-400 p-16 rounded w-1/4 text-gray-600 shadow-xl">All Arrivals<img className="pl-9" src={PlaneIcon}></img></button>
              <button className="bg-red-400 p-16 rounded w-1/4 text-gray-600 shadow-xl">All Departures<img className="pl-9" src={LuggageIcon}></img></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightViewButtons;
