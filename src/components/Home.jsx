import React from "react";
import Splash from "./Splash";
import Banner from "./Banner";
import ArrivalTable from "./ArrivalTable";
import PropTypes from "prop-types";

const Home = ( { flightData, airportData, clickedButton }) => {
    console.log(clickedButton)
  return (
    <>
      <Splash />
      <Banner airportData={airportData}/>
      <div className="flex w-full justify-center">
        <ArrivalTable flightData={flightData} />
      </div>
    </>
  );
};

Home.propTypes = {
    flightData: PropTypes.array.isRequired,
    airportData: PropTypes.array.isRequired,
    clickedButton: PropTypes.array.isRequired
  };

export default Home;
