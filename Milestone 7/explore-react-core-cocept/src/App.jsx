import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Device name="Laptop" price="15000" />
      <Device name="Mobile" price="9000" />
      <Device name="Tablet" price="20000" />
      <Student grade="5" score="90" />
      <Student grade="4" score="80" />
      <Student grade="3.5" score="70" />
      <Developer />
    </>
  );
}
function Person() {
  const age = 25;
  const money = 20;
  const moneyRec = 100;
  const person = {
    name: "Rakib",
    id: 1,
    address: {
      city: "Dhaka",
      country: "Bangladesh",
    },
  };
  return (
    <>
      <h1>
        I am {person.name} with age: {age}{" "}
      </h1>
      <p>I have ${money} in my bank account</p>
      <p>
        I have received ${moneyRec}, now I have ${money + moneyRec}
      </p>
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <div>
      <h2>
        This Device : {props.name} and price {props.price}
      </h2>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    color: "red",
    backgroundColor: "yellow",
    padding: "10px",
    borderRadius: "20px",
    border: "2px solid black",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding: </p>
    </div>
  );
}

function Student({ grade, score }) {
  console.log(grade, score);
  return (
    <div className=" student">
      <h3>This is a student</h3>
      <p>grade:{grade}</p>
      <p>score:{score}</p>
    </div>
  );
}
export default App;
