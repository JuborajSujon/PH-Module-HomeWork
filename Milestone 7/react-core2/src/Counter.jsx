import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    // setCount(count + 1);
    // setCount((prev) => prev + 1);
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    // setCount(count - 1);
    // setCount((prev) => prev - 1);
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: "2px solid black" }}>
      <h3>Counter {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
