import React from "react";
import RowHouse from "../assets/row_house.png";

const Header = () => {
  return (
    <div className="bg-avion-blue flex h-40  max-w-full justify-center">
      <div className="flex w-full max-w-7xl flex-row border-2 border-yellow-500">
        <div className="flex w-1/2 flex-row items-center">
          <img className="ml-6 h-28" src={RowHouse} alt="row houses" />

          <div className=" ml-2 flex flex-col justify-center text-white">
            <h1 className="font-Koulen text-4xl">ST. JOHN'S</h1>
            <h2 className="font-Gupter text-1xl text-opacity-70">
              International Airport Authority
            </h2>
          </div>
        </div>
        <div className="w-1/2">
          <ul className="flex h-full w-full flex-row items-center justify-around text-3xl text-white text-opacity-70">
            <li>AMENITIES</li>
            <li>|</li>
            <li>FLIGHTS</li>
            <li>|</li>
            <li>ADMIN</li>
            <li>|</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
