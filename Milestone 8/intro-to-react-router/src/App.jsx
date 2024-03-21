import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      {navigation.state === "loading" ? <p>Loading...</p> : null}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
