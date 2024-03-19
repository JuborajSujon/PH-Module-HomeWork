import "./App.css";
import PriceOptions from "./components/Price Options/PriceOptions";
// import Navbar from "./components/Navbar/Navbar";
import SelfNavbar from "./components/SelfNavbar/SelfNavbar";

function App() {
  return (
    <>
      <div className="container mx-auto">
        {/* <Navbar /> */}
        <SelfNavbar />
        <PriceOptions />
      </div>
    </>
  );
}

export default App;
