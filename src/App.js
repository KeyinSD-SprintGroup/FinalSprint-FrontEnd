import Header from "./components/Header";
import Banner from "./components/Banner";
import Splash from "./components/Splash";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="font-Koulen h-screen tracking-wider">
      <Header />
      <Splash />
      {/* <Admin /> */}
      <Banner />
    </div>
  );
}

export default App;
