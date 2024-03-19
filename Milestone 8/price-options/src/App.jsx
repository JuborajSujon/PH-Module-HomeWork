import "./App.css";
import Axios from "./components/Axios/Axios";
// import LineChart from "./components/LineChart/LineChart";
// import PriceOptions from "./components/Price Options/PriceOptions";
// import Navbar from "./components/Navbar/Navbar";
import SelfNavbar from "./components/SelfNavbar/SelfNavbar";

function App() {
  return (
    <>
      <div className="container mx-auto">
        {/* <Navbar /> */}
        <SelfNavbar />
        {/* <PriceOptions /> */}
        {/* <LineChart /> */}
        <Axios />
      </div>
    </>
  );
}

export default App;
