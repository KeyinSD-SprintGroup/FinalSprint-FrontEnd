import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Splash from "./components/Splash";
import Admin from "./components/Admin";
import ArrivalTable from "./components/ArrivalTable";

function App() {
  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/arrival_flight_view?arrivalAirportName=St.%20John%27s%20International%20Airport`,
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
  }, []);

  // const [flights, setFlights] = useState([]);

  // useEffect(() => {
  //   const fetchFlights = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/flight");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch flights");
  //       }

  //       const data = await response.json();
  //       const flightsData = data._embedded.flight || [];
  //       setFlights(flightsData);
  //     } catch (error) {
  //       console.error("Error fetching flights:", error.message);
  //     }
  //   };

  //   fetchFlights();
  // }, []);

  return (
    <div className="h-screen font-Koulen tracking-wider">
      <Header />
      <Splash />
      <Admin />
      <Banner />
      <Footer />
      <div className="flex w-full justify-center">
        <ArrivalTable flightData={flightData} />
      </div>
    </div>
  );
}

export default App;
