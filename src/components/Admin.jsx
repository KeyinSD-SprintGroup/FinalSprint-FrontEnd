import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [activeButton, setActiveButton] = useState("Flight");
  const [activeEntity, setActiveEntity] = useState("Flight");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
  });

  const [aircraftFormData, setAircraftFormData] = useState({
    airline_name: "",
    number_of_passengers: "",
    tail_number: "",
    type: "",
  });

  const [flightFormData, setFlightFormData] = useState({
    arrival_date_and_time: "",
    departure_date_and_time: "",
    flight_number: "",
    gate: "",
    status: "",
    airline_id: "",
    arrival_airport_id: "",
    departure_airport_id: "",
  });

  const switchEntity = (entity) => {
    setActiveEntity(entity);
    setActiveButton(entity === activeButton ? null : entity);
  };
  const putPassengerData = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/passenger",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Server response:", response);

      if (response.status === 201) {
        console.log("Passenger data added successfully");
      } else {
        throw new Error("Failed to add passenger data");
      }
    } catch (error) {
      console.error("Error adding passenger data:", error.message);
    }
  };

  const handlePassengerSubmit = () => {
    console.log("Submit button clicked");
    const passengerData = {
      firstName: formData.first_name,
      lastName: formData.last_name,
      phoneNumber: formData.phone_number,
    };

    console.log("Passenger data to be submitted:", passengerData);
    putPassengerData(passengerData);
  };

  const putAircraftData = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/aircraft",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Server response:", response);

      if (response.status === 201) {
        console.log("Aircraft data added successfully");
      } else {
        throw new Error("Failed to add aircraft data");
      }
    } catch (error) {
      console.error("Error adding aircraft data:", error.message);
    }
  };

  const handleAircraftSubmit = () => {
    console.log("Submit button clicked");
    const aircraftData = {
      airlineName: aircraftFormData.airline_name,
      numberOfPassengers: aircraftFormData.number_of_passengers,
      tailNumber: aircraftFormData.tail_number,
      type: aircraftFormData.type,
    };

    console.log("Aircraft data to be submitted:", aircraftData);
    putAircraftData(aircraftData);
  };

  const putFlightData = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/flight", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Server response:", response);

      if (response.status === 201) {
        console.log("Flight data added successfully");
      } else {
        throw new Error("Failed to add flight data");
      }
    } catch (error) {
      console.error("Error adding flight data:", error.message);
    }
  };

  const handleFlightSubmit = () => {
    console.log("Submit button clicked");
    const flightData = {
      arrivalDateAndTime: flightFormData.arrival_date_and_time,
      departureDateAndTime: flightFormData.departure_date_and_time,
      flightNumber: flightFormData.flight_number,
      gate: flightFormData.gate,
      status: flightFormData.status,
      airlineId: flightFormData.airline_id,
      arrivalAirportId: flightFormData.arrival_airport_id,
      departureAirportId: flightFormData.departure_airport_id,
    };

    console.log("Flight data to be submitted:", flightData);
    putFlightData(flightData);
  };

  const nav = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      nav("/login");
    } else {
      setIsLoggedIn(true);
      nav("/admin");
    }
  }, []);

  if (isLoggedIn) {
    return null;
  }

  return (
    <div>
      <div className="flex h-40 max-w-full  justify-center bg-avion-blue">
        <div className="flex w-full max-w-screen-lg flex-col ">
          <div className="h-1/2 w-1/2 items-center">
            <div className="mt-6 flex flex-row justify-between">
              <h1 className="text-4xl text-white ">Admin</h1>
            </div>
            <div className="mt-5 flex font-Gupter">
              <button
                onClick={() => switchEntity("Flight")}
                style={{
                  backgroundColor:
                    activeButton === "Flight"
                      ? "rgb(55, 65, 81)"
                      : "rgba(255, 255, 255, 0.5)",
                }}
                className="m-2 w-48 rounded border border-black/50 p-2 text-white"
              >
                Add Flight
              </button>
              <button
                onClick={() => switchEntity("Aircraft")}
                style={{
                  backgroundColor:
                    activeButton === "Aircraft"
                      ? "rgb(55, 65, 81)"
                      : "rgba(255, 255, 255, 0.5)",
                }}
                className="m-2 w-48 rounded border border-black/50 bg-white/50 p-2 text-white"
              >
                Add Aircraft
              </button>
              <button
                onClick={() => switchEntity("Passenger")}
                style={{
                  backgroundColor:
                    activeButton === "Passenger"
                      ? "rgb(55, 65, 81)"
                      : "rgba(255, 255, 255, 0.5)",
                }}
                className="m-2 w-48 rounded border border-black/50 bg-white/50 p-2 text-white"
              >
                Add Passenger
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-Gupter">
        <div className="mb-6 mt-6 flex w-full max-w-screen-lg flex-col rounded bg-gray-300">
          {activeEntity === "Flight" && (
            <div className="h-1/2 w-1/2 items-center pl-5">
              <div className="mt-6 flex flex-row justify-between">
                <h1 className="text-4xl text-gray-700">Add Flight</h1>
              </div>
              <div className="p-5">
                <div className="flex p-2">
                  <h2 className="w-2/5">Arrival Date and Time:</h2>
                  <input
                    type="text"
                    id="arrival_date_and_time"
                    name="arrival_date_and_time"
                    value={flightFormData.arrival_date_and_time}
                    onChange={(e) =>
                      setFlightFormData((prevData) => ({
                        ...prevData,
                        arrival_date_and_time: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Depature Date and Time:</h2>

                  <input
                    type="text"
                    id="depature_date_and_time"
                    name="depature_date_and_time"
                    value={flightFormData.departure_date_and_time}
                    onChange={(e) =>
                      setFlightFormData((prevData) => ({
                        ...prevData,
                        departure_date_and_time: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Flight Number:</h2>

                  <input
                    type="text"
                    id="flight_number"
                    name="flight_number"
                    value={flightFormData.flight_number}
                    onChange={(e) =>
                      setFlightFormData((prevData) => ({
                        ...prevData,
                        flight_number: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Gate:</h2>

                  <input
                    type="text"
                    id="gate"
                    name="gate"
                    value={flightFormData.gate}
                    onChange={(e) =>
                      setFlightFormData((prevData) => ({
                        ...prevData,
                        gate: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Status:</h2>

                  <input
                    type="text"
                    id="status"
                    name="status"
                    value={flightFormData.status}
                    onChange={(e) =>
                      setFlightFormData((prevData) => ({
                        ...prevData,
                        status: e.target.value,
                      }))
                    }
                  />
                </div>
                {/* <div className="flex p-2">
                  <h2 className="w-2/5">Airline ID:</h2>

                  <input
                    type="text"
                    id="airline_id"
                    name="airline_id"
                    value={flightFormData.airline_id}
                    onChange={(e) =>
                      setFlightFormData((prevData) => ({
                        ...prevData,
                        airline_id: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Arrival Airport ID:</h2>

                  <input
                    type="text"
                    id="arrival_airport_id"
                    name="arrival_airport_id"
                    value={flightFormData.arrival_airport_id}
                    onChange={(e) =>
                      setFlightFormData((prevData) => ({
                        ...prevData,
                        arrival_airport_id: e.target.value,
                      }))
                    }
                  /> */}
                {/* </div> */}
                {/* <div className="flex p-2">
                  <h2 className="w-2/5">Departure Airport ID:</h2>

                  <input
                    type="text"
                    id="departure_airport_id"
                    name="departure_airport_id"
                    value={flightFormData.departure_airport_id}
                    onChange={(e) =>
                      setFlightFormData((prevData) => ({
                        ...prevData,
                        departure_airport_id: e.target.value,
                      }))
                    }
                  />
                </div> */}
              </div>
              <div>
                {" "}
                <button
                  onClick={handleFlightSubmit}
                  className="m-2 mb-8 w-48 rounded border border-black/50 bg-avion-blue p-2 text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {activeEntity === "Aircraft" && (
            <div className="h-1/2 w-1/2 items-center pl-5">
              <div className="mt-6 flex flex-row justify-between">
                <h1 className="text-4xl text-gray-700">Add Aircraft</h1>
              </div>
              <div className="p-5">
                <div className="flex p-2">
                  <h2 className="w-2/5">Airline Name:</h2>
                  <input
                    type="text"
                    id="airline_name"
                    name="airline_name"
                    value={aircraftFormData.airline_name}
                    onChange={(e) =>
                      setAircraftFormData((prevData) => ({
                        ...prevData,
                        airline_name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Number of Passengers:</h2>
                  <input
                    type="text"
                    id="number_of_passengers"
                    name="number_of_passengers"
                    value={aircraftFormData.number_of_passengers}
                    onChange={(e) =>
                      setAircraftFormData((prevData) => ({
                        ...prevData,
                        number_of_passengers: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Tail Number:</h2>
                  <input
                    type="text"
                    id="tail_number"
                    name="tail_number"
                    value={aircraftFormData.tail_number}
                    onChange={(e) =>
                      setAircraftFormData((prevData) => ({
                        ...prevData,
                        tail_number: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Type of Aircraft:</h2>
                  <input
                    type="text"
                    id="type"
                    name="type"
                    value={aircraftFormData.type}
                    onChange={(e) =>
                      setAircraftFormData((prevData) => ({
                        ...prevData,
                        type: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={handleAircraftSubmit}
                  className="m-2 mb-8 w-48 rounded border border-black/50 bg-avion-blue p-2 text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {activeEntity === "Passenger" && (
            <div className="h-1/2 w-1/2 items-center pl-5">
              <div className="mt-6 flex flex-row justify-between">
                <h1 className="text-4xl text-gray-700">Add Passenger</h1>
              </div>
              <div className="p-5">
                <div className="flex p-2">
                  <h2 className="w-2/5">First Name:</h2>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={(e) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        first_name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Last Name:</h2>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={(e) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        last_name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Phone Number:</h2>
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={(e) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        phone_number: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={handlePassengerSubmit}
                  className="m-2 mb-8 w-48 rounded border border-black/50 bg-avion-blue p-2 text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
