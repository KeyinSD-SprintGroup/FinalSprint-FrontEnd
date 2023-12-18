import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Splash from "./components/Splash";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import ArrivalTable from "./components/ArrivalTable";
import Login from "./components/Login";

function Home( ) {
  const [flightData, setFlightData] = useState([]);
  const isArrival = true; // Change to false for departures
  const airportName = "St.%20John%27s%20International%20Airport";
  console.log(airportName)

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const endpoint = isArrival
          ? "arrival_flight_view"
          : "departure_flight_view";

        const response = await fetch(
          `http://localhost:8080/${endpoint}?${isArrival ? 'arrival' : 'departure'}AirportName=${airportName}`
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
  return (
    <>
      <Splash />
      <Banner />
      <div className="flex w-full justify-center">
        <ArrivalTable flightData={flightData} />
      </div>
    </>
  )
}

function App() {
  const [airportData, setAirportData] = useState([]);

  useEffect(() => {
    const fetchAirportData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/airport`,
        );
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
  return (
    <Router>
      <div className="h-screen font-Koulen tracking-wider">
        <Header />
        <Routes>
          <Route path="/" element={<Home airportData={airportData}/>}></Route>
          <Route path="/flights" element={<Banner airportData={airportData}/>}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
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
