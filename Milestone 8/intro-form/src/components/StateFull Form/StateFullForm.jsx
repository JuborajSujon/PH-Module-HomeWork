import { useState } from "react";

const StateFullForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <br />
        <input
          onChange={handleEmailChange}
          type="text"
          name="email"
          placeholder="Enter your email"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StateFullForm;
