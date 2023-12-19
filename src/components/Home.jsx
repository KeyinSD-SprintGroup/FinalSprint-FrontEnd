import React from "react";
import Splash from "./Splash";
import Banner from "./Banner";
import ArrivalTable from "./ArrivalTable";
import PropTypes from "prop-types";

const Home = ({
  flightData,
  airportData,
  sendDataToParent,
  setAirportName,
  airportName,
}) => {
  const handleButtonClick = (buttonName) => {
    // setClickedButton(buttonName);
    sendDataToParent(buttonName);
    console.log(`Button clicked: ${buttonName}`);
  };
  return (
    <>
      <Splash />
      <Banner
        setAirportName={setAirportName}
        airportData={airportData}
        onButtonClick={handleButtonClick}
        airportName={airportName}
      />
      <div className="flex w-full justify-center">
        <ArrivalTable flightData={flightData} />
      </div>
    </>
  );
};

Home.propTypes = {
  flightData: PropTypes.array.isRequired,
  airportData: PropTypes.array.isRequired,
  sendDataToParent: PropTypes.func.isRequired,
  setAirportName: PropTypes.func.isRequired,
  airportName: PropTypes.string.isRequired,
};

export default Home;
