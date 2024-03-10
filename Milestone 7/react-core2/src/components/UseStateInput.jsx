import { useState } from "react";

// Using React hooks to update the state of an input
// Method one - previous value add current value and return new value
export default function UseStateInput() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input
        type="text"
        value={message}
        placeholder="Enter your message"
        onChange={(e) => {
          const val = e.target.value;
          setMessage((prev) => prev + val);
        }}
      />
      <p>
        <strong>{message}</strong>
      </p>
    </div>
  );
}

// Method two - update full value inside the input field
export function UseStateInput2() {
  const [mgs, setMgs] = useState("");
  const handleChange = (e) => {
    setMgs(e.target.value);
    console.log(mgs);
  };
  return (
    <div>
      <input
        type="text"
        value={mgs}
        placeholder="Enter your message"
        onChange={(e) => handleChange(e)}
      />
      <p>
        <strong>{mgs}</strong>
      </p>
    </div>
  );
}
