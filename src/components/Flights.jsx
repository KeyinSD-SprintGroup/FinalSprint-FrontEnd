import React from "react";
import Banner from "./Banner";
import ArrivalTable from "./ArrivalTable";
import PropTypes from "prop-types";

const Flights = ( { flightData, airportData, clickedButton }) => {
    console.log(clickedButton)
  return (
    <>
      <Banner airportData={airportData}/>
      <div className="flex w-full justify-center">
        <ArrivalTable flightData={flightData} />
      </div>
    </>
  );
};

Flights.propTypes = {
    flightData: PropTypes.array.isRequired,
    airportData: PropTypes.array.isRequired,
    clickedButton: PropTypes.array.isRequired
  };

export default Flights;