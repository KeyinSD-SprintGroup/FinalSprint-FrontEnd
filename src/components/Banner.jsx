import React from "react";

const Banner = () => {
  return (
    <div className="bg-avion-blue flex h-40  max-w-full justify-center">
      <div className="flex w-full max-w-screen-lg flex-col border-2 border-red-500">
        <div className="h-1/2 w-1/2 items-center">
          <div className="mt-6 flex flex-row justify-between">
            <h1 className="text-4xl text-white ">FLIGHTS</h1>
            <div className=" font-Gupter text flex w-60 flex-row items-center justify-around bg-gray-300 text-2xl text-gray-500">
              Arrivals | Departures
            </div>
            <div className="text-white">
              <span class="material-icons text-white">refresh</span>Refresh
            </div>
          </div>
        </div>

        <div className="h-1/2 items-center justify-between">
          <ul className="font-Gupter flex h-full w-full flex-row items-center justify-around text-2xl text-white text-opacity-70">
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
