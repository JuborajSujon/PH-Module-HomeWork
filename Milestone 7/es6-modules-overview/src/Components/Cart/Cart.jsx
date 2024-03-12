import PropTypes from "prop-types";
import "./Cart.css";
export default function Cart({ cart, handleRemoveFromCart }) {
  return (
    <div>
      <h4>Added Bottles: {cart.length}</h4>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div key={bottle.id + Math.random()}>
            <img src={bottle.img} alt="" />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};
