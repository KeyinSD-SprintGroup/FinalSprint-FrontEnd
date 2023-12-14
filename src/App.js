import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Splash from "./components/Splash";
import FlightViewButtons from "./components/FlightViewButtons";
// import Admin from "./components/Admin";

function App() {
  return (
    <div className="h-screen font-Koulen tracking-wider">
      <Header />
      <Splash />
      {/* <Admin /> */}
      <Banner />
      <FlightViewButtons />
      <Footer />
    </div>
  );
}

export default App;
