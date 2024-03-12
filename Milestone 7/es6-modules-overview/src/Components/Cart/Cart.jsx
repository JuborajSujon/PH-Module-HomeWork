/* eslint-disable react/prop-types */
import "./Cart.css";
export default function Cart({ cart }) {
  return (
    <div>
      <h4>Added Bottles: {cart.length}</h4>
      <div className="cart-container">
        {cart.map((bottle) => (
          <img key={bottle.id} src={bottle.img} alt="" />
        ))}
      </div>
    </div>
  );
}
