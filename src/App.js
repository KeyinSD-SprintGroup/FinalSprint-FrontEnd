import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Splash from "./components/Splash";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import ArrivalTable from "./components/ArrivalTable";
import Login from "./components/Login";

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

function Home() {
  return (
    <>
      <Splash />
      <Banner />
      <div className="flex w-full justify-center">
        <ArrivalTable flights={flights} />
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="h-screen font-Koulen tracking-wider">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/flights" element={<Banner />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
