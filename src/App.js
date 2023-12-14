import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Splash from "./components/Splash";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="h-screen font-Koulen tracking-wider">
      <Header />
      <Splash />
      {/* <Admin /> */}
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
