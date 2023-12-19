import React from "react";
import Banner from "./Banner";
import ArrivalTable from "./ArrivalTable";
import PropTypes from "prop-types";

const Flights = ({
  flightData,
  airportData,
  sendDataToParent,
  airportName,
  setAirportName,
}) => {
  // const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    // setClickedButton(buttonName);
    sendDataToParent(buttonName);
    console.log(`Button clicked: ${buttonName}`);
  };
  return (
    <>
      <Banner
        airportName={airportName}
        setAirportName={setAirportName}
        airportData={airportData}
        onButtonClick={handleButtonClick}
      />
      <div className="flex w-full justify-center">
        <ArrivalTable flightData={flightData} />
      </div>
    </>
  );
};

Flights.propTypes = {
  flightData: PropTypes.array.isRequired,
  airportData: PropTypes.array.isRequired,
  sendDataToParent: PropTypes.func.isRequired,
  setAirportName: PropTypes.func.isRequired,
  airportName: PropTypes.string.isRequired,
};

export default Flights;
