import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Splash from "./components/Splash";
import FlightViewButtons from "./components/FlightViewButtons";
// import Admin from "./components/Admin";
import ArrivalTable from "./components/ArrivalTable";

const flights = [
  {
    arrivalDate: "Dec 21",
    departureDate: "",
    arrivalTime: "00:15",
    departureTime: "",
    flightNumber: "AL0001",
    airline: "American Airlines",
    to: null,
    from: "Chicago",
    status: "ARRIVED",
    terminal: "West",
    gate: "B2",
    checkInCounter: null,
    carousel: "B",
  },
  {
    arrivalDate: "Dec 21",
    departureDate: "",
    arrivalTime: "00:15",
    departureTime: "",
    flightNumber: "AL0001",
    airline: "American Airlines",
    to: null,
    from: "Chicago",
    status: "ARRIVED",
    terminal: "West",
    gate: "B2",
    checkInCounter: null,
    carousel: "B",
  },
  {
    arrivalDate: "Dec 21",
    departureDate: "",
    arrivalTime: "00:15",
    departureTime: "",
    flightNumber: "AL0001",
    airline: "American Airlines",
    to: null,
    from: "Chicago",
    status: "ARRIVED",
    terminal: "West",
    gate: "B2",
    checkInCounter: null,
    carousel: "B",
  },
  {
    arrivalDate: "Dec 21",
    departureDate: "",
    arrivalTime: "00:15",
    departureTime: "",
    flightNumber: "AL0001",
    airline: "American Airlines",
    to: null,
    from: "Chicago",
    status: "ARRIVED",
    terminal: "West",
    gate: "B2",
    checkInCounter: null,
    carousel: "B",
  },
  {
    arrivalDate: "Dec 21",
    departureDate: "",
    arrivalTime: "00:15",
    departureTime: "",
    flightNumber: "AL0001",
    airline: "American Airlines",
    to: null,
    from: "Chicago",
    status: "ARRIVED",
    terminal: "West",
    gate: "B2",
    checkInCounter: null,
    carousel: "B",
  },
  {
    arrivalDate: "Dec 21",
    departureDate: "",
    arrivalTime: "00:15",
    departureTime: "",
    flightNumber: "AL0001",
    airline: "American Airlines",
    to: null,
    from: "Chicago",
    status: "ARRIVED",
    terminal: "West",
    gate: "B2",
    checkInCounter: null,
    carousel: "B",
  },
];

function App() {
  return (
    <div className="h-screen font-Koulen tracking-wider">
      <Header />
      <Splash />
      {/* <Admin /> */}
      {/* <Login /> */}
      <Banner />
      <div className="flex w-full justify-center">
        <ArrivalTable flights={flights} />
      </div>
      <FlightViewButtons />

      <Footer />
    </div>
  );
}

export default App;
