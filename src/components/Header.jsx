import React, {useState} from "react";
import FlightIcon from "../assets/FLIGHT HUB (1).png"
import { Link } from "react-router-dom";

const Header = () => {
  const [activeButton, setActiveButton] = useState("HOME");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  return (
    <div className="flex h-40 max-w-full  justify-center bg-avion-blue">
      <div className="flex w-full max-w-7xl ">
        <div className="flex w-1/2 flex-row items-center">
          <img className="ml-6 h-28" src={FlightIcon} alt="flight icon" />

          <div className=" ml-2 flex flex-col justify-center text-white">
            <h1 className="font-Koulen text-4xl">Flight Hub</h1>
            <h2 className="font-Gupter text-sm text-opacity-70">
              Your one stop shop to seamless air travel
            </h2>
          </div>
        </div>
        <div className="w-1/2">
          <ul className="flex h-full w-full flex-row items-center justify-around text-3xl text-white text-opacity-70">
            <Link to="/">
            <button
              onClick={() => handleButtonClick("HOME")}
              style={{
                color:
                  activeButton === "HOME"
                    ? "white"
                    : "rgba(255, 255, 255, 0.63)",
              }}
            >
              HOME
            </button>
            </Link>
            <li>|</li>
            <Link to="/flights">
            <button
              onClick={() => handleButtonClick("FLIGHTS")}
              style={{
                color:
                  activeButton === "FLIGHTS"
                    ? "white"
                    : "rgba(255, 255, 255, 0.63)",
              }}
            >
              FLIGHTS
            </button>
            </Link>
            <li>|</li>
            <Link to="/admin">
            <button
              onClick={() => handleButtonClick("ADMIN")}
              style={{
                color:
                  activeButton === "ADMIN"
                    ? "white"
                    : "rgba(255, 255, 255, 0.63)",
              }}
            >
              ADMIN
            </button>
            </Link>
            <li>|</li>
            <Link to="/contact">
            <button
              onClick={() => handleButtonClick("CONTACT")}
              style={{
                color:
                  activeButton === "CONTACT"
                    ? "white"
                    : "rgba(255, 255, 255, 0.63)",
              }}
            >
              Contact
            </button>
            </Link>
            <li>|</li>
            <Link to="/login">
            <button
              onClick={() => handleButtonClick("LOGIN")}
              style={{
                color:
                  activeButton === "LOGIN"
                    ? "white"
                    : "rgba(255, 255, 255, 0.63)",
              }}
            >
              Login
            </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
