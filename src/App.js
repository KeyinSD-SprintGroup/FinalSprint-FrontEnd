import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Splash from "./components/Splash";

function App() {
  return (
    <div className="h-screen font-Koulen tracking-wider">
      <Header />
      <Splash />
      {/* <Admin /> */}
      {/* <Login /> */}
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
