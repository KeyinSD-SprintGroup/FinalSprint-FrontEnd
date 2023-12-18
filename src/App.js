import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./components/Banner";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Splash from "./components/Splash";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import ArrivalTable from "./components/ArrivalTable";
import Login from "./components/Login";


function Home() {
  return (
    <>
      <Splash />
      <Banner />
      <div className="flex w-full justify-center">
        <ArrivalTable />
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
        setAirportData(data);
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
          <Route path="/" element={<Home />}></Route>
          <Route path="/flights" element={<Banner airportData={airportData}/>}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
