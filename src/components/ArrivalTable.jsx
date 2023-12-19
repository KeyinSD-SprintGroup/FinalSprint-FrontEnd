import React from "react";
import PropTypes from "prop-types";

const ArrivalTable = ({ flightData, buttonName }) => {
  const direction = buttonName === "Arrivals" ? "From" : "To";
  return (
    <table className="w-full max-w-screen-lg table-fixed text-center">
      <thead className="border-y-14 border-avion-blue bg-avion-blue font-Gupter text-2xl text-white text-opacity-70">
        <tr>
          <th className="border-r border-white">Airline</th>
          <th className="border-r border-white">Flight Number</th>
          <th className="border-r border-white">Date</th>
          <th className="border-r border-white">Time</th>
          <th className="border-r border-white">{direction}</th>
          <th className="">Status</th>
        </tr>
      </thead>
      <tbody className="">
        {flightData.length > 0 ? (
          flightData.map((flight, index) => {
            // console.log(flight);

            const dateObject = new Date(
              buttonName === "Arrivals"
                ? flight.arrivalDateAndTime
                : flight.departureDateAndTime,
            );
            // console.log(arrivalDateObject);
            const date = dateObject.toLocaleDateString();
            // console.log(arrivalDate);
            const time = dateObject.toLocaleTimeString();
            // console.log(arrivalTime);

            return (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                } font-Gupter`}
              >
                <td>{flight.airlineName}</td>
                <td>{flight.flightNumber}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>
                  {buttonName === "Arrivals"
                    ? flight.departureAirportName
                    : flight.arrivalAirportName}
                </td>
                <td>{flight.status}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="5">Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

ArrivalTable.propTypes = {
  flightData: PropTypes.array.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default ArrivalTable;
