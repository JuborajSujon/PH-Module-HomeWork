import { useEffect, useState } from "react";
import "./App.css";
import Watchs from "./Components/Watchs/Watchs";

function App() {
  const [watches, setWatches] = useState([]);
  // const watches = [
  //   { id: 1, name: "Apple watch", price: 300 },
  //   { id: 2, name: "Samsung watch", price: 400 },
  //   { id: 3, name: "Xiaomi watch", price: 500 },
  // ];

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <>
      <h1>Moduel 41 Project </h1>
      {watches.map((watch) => (
        <Watchs key={watch.id} watch={watch} />
      ))}
    </>
  );
}

export default App;
