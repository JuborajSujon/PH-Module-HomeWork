import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  const handleClick2 = () => {
    alert("Button 2 Clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me 2</button>
      <button
        onClick={() => {
          alert("Button 3 Clicked");
        }}>
        Click Me 3
      </button>
      <button onClick={() => addToFive(5)}>Add to Five</button>
    </>
  );
}

export default App;
