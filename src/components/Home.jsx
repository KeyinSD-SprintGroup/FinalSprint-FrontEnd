import React from "react";
import Splash from "./Splash";
import Banner from "./Banner";
import FlightViewButtons from "./FlightViewButtons";
import ArrivalTable from "./ArrivalTable";
import PropTypes from "prop-types";

const Home = ( { flightData, airportData, sendDataToParent }) => {
    const handleButtonClick = (buttonName) => {
        // setClickedButton(buttonName);
        sendDataToParent(buttonName);
        console.log(`Button clicked: ${buttonName}`);
    }
  return (
    <>
      <Splash />
      <Banner airportData={airportData} onButtonClick={handleButtonClick}/>
      <div className="flex w-full justify-center">
        <ArrivalTable flightData={flightData} />
      </div>
      <FlightViewButtons />
    </>
  );
};

Home.propTypes = {
    flightData: PropTypes.array.isRequired,
    airportData: PropTypes.array.isRequired,
    sendDataToParent: PropTypes.func.isRequired,
  };

export default Home;