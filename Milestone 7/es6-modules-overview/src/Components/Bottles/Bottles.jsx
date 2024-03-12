import "./Bottles.css";
export default function Bottles({ bottle, handleAddToCart }) {
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <h3>Bottle : {name}</h3>
      <img src={img} alt={name} />
      <p>Price : {price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
    </div>
  );
}
