import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
