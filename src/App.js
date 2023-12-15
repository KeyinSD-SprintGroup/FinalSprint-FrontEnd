import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Splash from "./components/Splash";
// import FlightViewButtons from "./components/FlightViewButtons";
import Admin from "./components/Admin";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Splash />
      <Banner />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
