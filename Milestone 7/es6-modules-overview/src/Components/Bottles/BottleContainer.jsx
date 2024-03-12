import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Bottles from "./Bottles";
import "./BottleContainer.css";
export default function BottleContainer() {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  return (
    <div>
      <Header />
      <h4>Bottles: {bottles.length}</h4>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottles key={bottle.id} bottle={bottle} />
        ))}
      </div>
    </div>
  );
}
