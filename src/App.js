import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Flights from "./components/Flights";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [buttonName, setButtonName] = useState("Arrivals");

  const handleButtonName = (data) => {
    console.log("Data recieved: ", data);
    setButtonName(data);
  };

  const [airportData, setAirportData] = useState([]);

  useEffect(() => {
    const fetchAirportData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/airport`);
        if (!response.ok) {
          throw new Error("Failed to fetch Airport data");
        }
        const data = await response.json();
        console.log(data);
        setAirportData(data._embedded?.airport || []);
      } catch (error) {
        console.error("Error fetching airport data:", error.message);
      }
    };

    fetchAirportData();
  }, []);

  const [flightData, setFlightData] = useState([]);
  const isArrival = buttonName === "Arrivals";
  // const isArrival = true; // Change to false for departures

  const [airportName, setAirportName] = useState(
    "St. John's International Airport",
  );
  console.log(airportName);

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const endpoint = isArrival
          ? "arrival_flight_view"
          : "departure_flight_view";

        const response = await fetch(
          `http://localhost:8080/${endpoint}?${
            isArrival ? "arrival" : "departure"
          }AirportName=${encodeURIComponent(airportName)}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch flight data");
        }

        const data = await response.json();
        console.log(data);
        setFlightData(data);
      } catch (error) {
        console.error("Error fetching flight data:", error.message);
      }
    };

    fetchFlightData();
  }, [isArrival, airportName]);

  const [loggedIn, setLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      console.log(`Welcome back, Admin!`);
    }
  }, [loggedIn]);

  const logOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    setLoggedIn(false);
    console.log("You have been logged out.");
  };

  return (
    <Router>
      <div className="h-screen font-Koulen tracking-wider">
        <Header loggedIn={loggedIn} logOut={logOut} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setAirportName={setAirportName}
                airportName={airportName}
                flightData={flightData}
                airportData={airportData}
                sendDataToParent={handleButtonName}
                buttonName={buttonName}
              />
            }
          ></Route>
          <Route
            path="/flights"
            element={
              <Flights
                flightData={flightData}
                airportData={airportData}
                sendDataToParent={handleButtonName}
                airportName={airportName}
                setAirportName={setAirportName}
              />
            }
          ></Route>
          <Route path="/admin" element={<Admin loggedIn={loggedIn} />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

Home.propTypes = {
  airportData: PropTypes.array.isRequired,
};

export default App;
