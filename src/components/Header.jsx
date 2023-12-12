import React, {useState} from "react";
import RowHouse from "../assets/row_house.png";

const Header = () => {
  const [activeButton, setActiveButton] = useState('HOME');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  return (
    <div className="bg-avion-blue flex h-40  max-w-full justify-center">
      <div className="flex w-full max-w-7xl ">
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
          <button onClick={() => handleButtonClick('HOME')} style={{color: activeButton === 'HOME' ? 'white' :'rgba(255, 255, 255, 0.63)'}}>HOME</button>
            <li>|</li>
            <button onClick={() => handleButtonClick('AMENITIES')} style={{color: activeButton === 'AMENITIES' ? 'white' :'rgba(255, 255, 255, 0.63)'}}>AMENITIES</button>
            <li>|</li>
            <button onClick={() => handleButtonClick('FLIGHTS')} style={{color: activeButton === 'FLIGHTS' ? 'white' :'rgba(255, 255, 255, 0.63)'}}>FLIGHTS</button>
            <li>|</li>
            <button onClick={() => handleButtonClick('ADMIN')} style={{color: activeButton === 'ADMIN' ? 'white' :'rgba(255, 255, 255, 0.63)'}}>ADMIN</button>
            <li>|</li>
            <button onClick={() => handleButtonClick('CONTACT')} style={{color: activeButton === 'CONTACT' ? 'white' :'rgba(255, 255, 255, 0.63)'}}>CONTACT</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
