import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Student />
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

function Student() {
  return (
    <div>
      <h3>This is a student</h3>
      <p>name:</p>
      <p>age:</p>
    </div>
  );
}
export default App;
