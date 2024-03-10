import { useState } from "react";

export default function UseStateVsVariable() {
  const [count, setCount] = useState(0);
  let varCount = 0;
  function handleVarCount() {
    varCount = varCount + 1;
    console.log("Inside handleVarCount", varCount);
  }
  console.log("Outside handleVarCount", varCount);

  function handleStateCount() {
    let newCount = count + 1;
    setCount(newCount);
  }

  return (
    <div>
      <h4>useState Counter : {count}</h4>
      <h4>Variable Counter : {varCount}</h4>
      <button onClick={handleStateCount}>UseState Counter</button>
      <button onClick={handleVarCount}>Variable Counter</button>
    </div>
  );
}
