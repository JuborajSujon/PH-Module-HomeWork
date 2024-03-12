import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Bottles from "./Bottles";
import "./BottleContainer.css";
import { getStoredCart, setStoredCart } from "../../Utilities/localStorage";
export default function BottleContainer() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage
  useEffect(() => {
    console.log(bottles.length);

    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);

    setStoredCart(bottle.id);
  };
  return (
    <div>
      <Header />
      <h4>Bottles Available: {bottles.length}</h4>
      <h4>Added Bottles: {cart.length}</h4>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottles
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
