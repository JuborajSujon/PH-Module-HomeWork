import { useEffect, useState } from "react";
import Watchs from "./Watchs";

export default function WatchesContainer() {
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
    <div>
      <h1>Moduel 41 Project </h1>
      {watches.map((watch) => (
        <Watchs key={watch.id} watch={watch} />
      ))}
    </div>
  );
}
