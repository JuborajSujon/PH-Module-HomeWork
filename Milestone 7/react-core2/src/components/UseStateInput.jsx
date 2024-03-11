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

export function UseStateObject() {
  const [messageObj, setMessage] = useState({ message: "" });
  console.log(messageObj.message);
  const handleChange = (e) => {
    const val = e.target.value;
    messageObj.message = val;
    console.log("messageObj", messageObj);
    setMessage(messageObj);
    console.log(messageObj.message);
  };
  console.log("outside fn", messageObj.message);
  return (
    <div>
      <input
        type="text"
        value={messageObj.message}
        placeholder="Enter your message"
        onChange={(e) => handleChange(e)}
      />
      <p>{messageObj.message}</p>
    </div>
  );
}

export function UseStateObject2() {
  const [message, setMessage] = useState({ message: "" });

  const handleChange = (e) => {
    const val = e.target.value;
    const newObj = { ...message, message: val };
    setMessage(newObj);
  };

  return (
    <div>
      <input
        type="text"
        value={message.message}
        placeholder="Enter your message"
        onChange={(e) => handleChange(e)}
      />
      <p>
        <strong>{message.message}</strong>
      </p>
    </div>
  );
}

export function UseStateObject3() {
  const [message, setMessage] = useState({ message: "" });

  const handleChange = (e) => {
    const val = e.target.value;
    setMessage((prevState) => ({ ...prevState, message: val }));
  };

  return (
    <div>
      <input
        type="text"
        value={message.message}
        placeholder="Enter your message"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <p>
        <strong>{message.message}</strong>
      </p>
    </div>
  );
}

export function UseStateMessageList() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleChange = (e) => {
    setMessageList([
      ...messageList,
      {
        // Use the current size as ID (needed to iterate the list later)
        id: messageList.length + 1,
        message: message,
      },
    ]);
    setMessage(""); // Clear the text box
  };
  return (
    <div>
      <input
        type="text"
        value={message}
        placeholder="Enter a message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <input type="button" value="Add" onClick={(e) => handleChange(e)} />
      <ul>
        {messageList.map((m) => (
          <li key={m.id}>{m.message}</li>
        ))}
      </ul>
    </div>
  );
}
